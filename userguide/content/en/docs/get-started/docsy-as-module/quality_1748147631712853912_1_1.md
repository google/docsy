---
title: Package Group - GitLab Quality Assurance End-to-End Testing for the Package group
---

## Testing Strategy

### Local Development Testing

1. Unit Tests
   - Container Registry (Go): `make test`
   - Package Registry (Rails): `bundle exec rspec ee/spec/models/packages/`
   - Frontend: `yarn jest ee/spec/frontend/packages`

2. Integration Tests
   - Test against different storage backends
   - Verify API endpoints
   - Check authorization rules

### End-to-End Testing

The Package group uses [GitLab QA](https://gitlab.com/gitlab-org/gitlab-qa) for E2E testing. This is crucial for features that integrate multiple services.

#### Common Test Scenarios

1. Container Registry

   ```ruby
   # Publishing a container image
   Resource::Container::Image.fabricate_via_api! do |image|
     image.name = 'my-image'
     image.repository_name = 'my-project'
   end
   ```

2. Package Registry

   ```ruby
   # Publishing an npm package
   Resource::Package::Npm.fabricate_via_api! do |package|
     package.name = 'my-package'
     package.version = '1.0.0'
   end
   ```

### Test Environment Setup

#### Local Testing with GDK

1. Set required environment variables:

   ```bash
   export QA_DEBUG=true
   export WEBDRIVER_HEADLESS=false
   ```

2. Ensure GDK is using a [loopback interface](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/master/doc/index.md#create-loopback-interface-for-gdk)
3. Map hostname to the loopback interface

#### Testing File Uploads

Test uploads against multiple storage backends:

1. Local storage (default)
2. Object storage:
   - GCP (recommended for GitLab.com parity)
   - MinIO (local development)
   - AWS S3
   - Azure

#### HackyStack Demo Environment

For ephemeral demos with Omnibus and Container Registry:

1. Login to `https://gitlabsandbox.cloud`
2. Select Cloud Account ID `dev-package-container-96a3ff34`
3. Get credentials from View Credentials tab
4. Launch environment using Play icon
5. Run CI/CD pipeline
6. Manually trigger Deploy action
7. Access demo project using provided credentials
8. Clean up by triggering Destroy job when done

### Testing Tools

#### Seeding Utilities

1. [Container Factory](https://gitlab.com/nmezzopera/container-factory)
   - Quick creation of test images
   - Supports multiple architectures

2. [Container Registry Cloud Seeder](https://gitlab.com/gitlab-org/ci-cd/package-stage/container-registry-seeder)
   - Bulk image creation
   - Load testing support

### Troubleshooting

#### Common Issues

1. Storage backend connectivity

   ```bash
   # Check GCS credentials
   gsutil ls gs://your-bucket
   
   # Verify S3 access
   aws s3 ls s3://your-bucket
   ```

2. Registry authentication

   ```bash
   # Test registry login
   docker login registry.gitlab.com
   ```

3. Package publishing failures
   - Verify project/group permissions
   - Check storage quotas
   - Validate package metadata

## Documentation

- [GitLab QA Framework](https://gitlab.com/gitlab-org/gitlab-qa)
- [End-to-End Testing Guide](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/)
- [Container Registry Development](https://gitlab.com/gitlab-org/container-registry/-/blob/master/docs/development.md)
- [Package Development](https://docs.gitlab.com/ee/development/packages.html)
