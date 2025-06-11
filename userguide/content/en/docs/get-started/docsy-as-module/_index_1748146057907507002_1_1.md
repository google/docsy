---
# This is the title of your design document. Keep it short, simple, and descriptive. A
# good title can help communicate what the design document is and should be considered
# as part of any review.
title: Group and project deletions
status: ongoing
creation-date: "2025-03-27"
authors: [ "@lohrc", "@rymai" ]
dris: [ "@lohrc", "@rymai" ]
owning-stage: "~devops::tenant scale"
participating-stages: []
# Hides this page in the left sidebar. Recommended so we don't pollute it.
toc_hide: true
---

## Summary

This architecture blueprint outlines a comprehensive redesign of GitLab's deletion flow for groups and projects.
The current system presents significant challenges, including accidental permanent deletions, high support burden for recovery requests, and locked namespace paths.

Our proposal introduces a consistent, user-friendly deletion experience across all pricing tiers with a "pending deletion" state, recovery options, and automatic namespace renaming.
We recommend implementing this vision in three iterations, enhancing protection against data loss while maintaining user control.
These changes will significantly reduce support requests, mitigate accidental deletions, and improve the overall experience for all GitLab users regardless of pricing tier.

## Motivation

The current GitLab deletion flow has several critical shortcomings that negatively impact both users and internal teams.
Projects in personal namespaces lack deletion protection entirely, while protection for group-based projects is inconsistent across pricing tiers.
When users accidentally delete content, they have limited recourse, leading to unnecessary support requests and infrastructure team involvement for manual recoveries.
Additionally, some namespace paths remain locked while pending deletion, preventing users from reusing paths immediately.

### Goals

1. Create a consistent deletion experience across all pricing tiers and namespace types (group, project, personal namespace)
2. Reduce accidental deletions by implementing a "pending deletion" state for all entities
3. Decrease support and infrastructure team burden by enabling self-service recovery options
4. Free up namespace paths immediately upon deletion through automated renaming
5. Improve user experience by providing clear visibility and control over the deletion process
6. Separate the concepts of "moved to bin" (revocable) and "permanent deletion" (irrevocable) with appropriate UI

### Non-Goals

- Modifying how projects are associated with groups or user namespaces

## Proposal

We propose implementing a unified deletion flow across all GitLab environments and pricing tiers, with a phased approach consisting of three iterations:

1. **[Iteration 1: Basic Recovery Framework](https://gitlab.com/groups/gitlab-org/-/epics/17367)**
   - Implement consistent pending deletion period before permanent deletion for all pricing tiers
   - Add self-service recovery options for all deleted items
   - Standardize UI for deletion status across user and group namespaces
   - Implement consistent automated renaming to free up paths immediately

2. **[Iteration 2: Extended Deletion Protection](https://gitlab.com/groups/gitlab-org/-/epics/17366)**
   - Extend pending deletion period from 7 to 30 days on SaaS
   - Implement email notifications for deletion events and upcoming permanent deletions
   - Update scheduling system to support longer retention period

3. **[Iteration 3: Enhanced Deletion Interface](https://gitlab.com/groups/gitlab-org/-/epics/17368)**
   - Introduce dedicated "Bin" section in UI for managing deleted items
   - Create clear separation between "Move to Bin" and "Delete Permanently" actions
   - Implement bulk actions for trash management (restore multiple, empty trash)
   - Add filtering and sorting capabilities in the "Bin" UI

Find a visual reference of this proposal in [Figma](https://www.figma.com/board/AKGxnlizU5pr8r8zRled7z/Group-and-project-deletion-flow?node-id=0-1&p=f&t=9BDJWEeUGiTugJAW-0).

## Design and Implementation Details

### Current State

GitLab's deletion flow currently operates differently based on:

- Pricing tier (free vs. premium/ultimate)
- Entity type (project vs. group)
- Namespace type (user vs. group)

On premium and ultimate tiers, projects and groups enter a "pending deletion" state for 7 days, during which users can either recover or permanently delete them.
On the free tier, deleted items are immediately hidden from users and only accessible to admins.
Projects in user namespaces are deleted permanently without any recovery period.

![image](/images/handbook/engineering/architecture/design-documents/group_and_project_deletion/group_and_project_deletion_current.png)

### New Unified Deletion Flow

![image](/images/handbook/engineering/architecture/design-documents/group_and_project_deletion/group_and_project_deletion_iteration3.png)

#### Core Components

1. **Deletion Initiation**
   - When a user initiates deletion, the item and all its child items, if any, move to "pending deletion" state
   - System automatically renames the namespace to free up the original path
   - Item becomes inaccessible to regular operations but visible in a new "Bin" UI
   - All child items are treated like the parent item that is deleted

2. **Pending Deletion State**
   - Items remain in this state for a configurable period (7 days initially, 30 days in Iteration 2)
   - Clear UI indicators show deletion status and remaining time until permanent deletion
   - Email notifications sent at key milestones (initial deletion, 7 days before permanent deletion)
   - Items pending deletion still count towards usage quotas

3. **Recovery Mechanism**
   - Self-service recovery option available to users who have appropriate permissions
   - Recovery action restores item to active state with original content, including its child items
   - System handles potential namespace conflicts during recovery

4. **Permanent Deletion**
   - In iteration 1: Available to users with appropriate permissions
   - In iteration 3: Available through separate "Delete Permanently" action in Bin

5. **Bin Interface**
   - Dedicated section showing all deleted items the user has access to
   - Features for filtering, sorting, and bulk actions
   - Clear distinction between temporary deletion and permanent deletion

#### Technical Implementation Considerations

1. **Database Changes**
   - Add fields to track deletion state, scheduled permanent deletion date, and original path
   - Implement soft deletion pattern across all relevant entities

2. **API Enhancements**
   - Extend API to support new deletion states and operations
   - Implement endpoints for recovery, scheduled deletion, and bin management

3. **Namespace Handling**
   - Implement automatic suffix appending to free up namespace paths
   - Create conflict resolution strategy for recovery scenarios
   - Ensure proper validation for all namespace operations

4. **Permission Model**
   - Define permission requirements for viewing, recovering, and permanently deleting items
   - Implement permission checks consistently across UI and API
   - Support role-based access control for deletion operations

5. **Notification System**
   - Create templates for deletion-related notifications
   - Implement scheduling for time-based notification triggers
   - Provide clear action paths from notification emails

### User Experience Flow

#### User Moving a Project/Group to Bin

1. User selects "Move to Bin" option for project/group
2. System displays confirmation dialog explaining the process
3. Upon confirmation, system:
   - Moves item to pending deletion state
   - Renames namespace by appending unique identifier
   - Displays success message with link to Bin
   - Sends confirmation email with recovery information

#### User Recovering a Project/Group

1. User accesses Bin
2. Locates desired item using search/filter
3. Selects "Recover" option
4. System handles recovery and potential namespace conflicts
5. Displays success message with link to recovered item

#### Permanent Deletion

1. Occurs automatically after configured period (7/30 days)
2. Admin can trigger early by using admin interface (all iterations)
3. User can trigger early by using "Delete Permanently" in Inactive tab (iteration 1)
4. User can trigger early by using "Delete Permanently" in Bin (iteration 3)
5. System requires confirmation for permanent deletion
6. Notification sent after successful permanent deletion

## Alternative Solutions

### Permanent Deletion Restriction

Only admin users would retain the ability to permanently delete content before the scheduled deletion date. This approach significantly changes how users interact with the deletion process and creates several important trade-offs.

![image](/images/handbook/engineering/architecture/design-documents/group_and_project_deletion/group_and_project_deletion_alternative.png)

#### Pros

- Enhanced data protection: Dramatically reduces instances of accidental permanent data loss by removing the capability for users to perform immediate permanent deletions
- Reduced support burden: Fewer accidental deletion tickets to handle, freeing up support resources for other issues
- Simplified user interface: Users encounter only one deletion action rather than having to choose between soft and permanent deletion
- Consistent recovery experience: All users gain the same extended 30-day recovery window regardless of tier or namespace type

#### Cons

- Increased storage costs: Extending the pending deletion period from 7 to 30 days increases storage requirements approximately fourfold
- Loss of user autonomy: Users lose direct control over their content's lifecycle, potentially causing frustration
- Admin workload increase: Admins may become bottlenecks if many users request early permanent deletions
- Potential privacy concerns: Users unable to immediately and permanently remove sensitive data without admin involvement
- Implementation complexity: Requires additional permission controls and admin interface to manage deletion requests
