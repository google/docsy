# Set REFCACHE to another value to disable htmltest refcache-file manipulation
REFCACHE?=refcache
HTMLTEST_DIR=tmp
HTMLTEST?=htmltest # Specify as make arg if different
HTMLTEST_ARGS?=--log-level 1
LINK_CACHE_FILE?=refcache.json
LINK_CACHE_FILE_DEST_DIR?=static
LINK_CACHE_FILE_SRC_DIR?=$(HTMLTEST_DIR)/.htmltest

# Use $(HTMLTEST) in PATH, if available; otherwise, we'll get a copy
ifeq (, $(shell which $(HTMLTEST)))
override HTMLTEST=$(HTMLTEST_DIR)/bin/htmltest
ifeq (, $(shell which $(HTMLTEST)))
GET_LINK_CHECKER_IF_NEEDED=get-link-checker
endif
endif

default:
	@echo "Make what? Target list:\n"
	@make -rpn | grep '^[a-z]\S*:' | sed 's/://' | sort

$(LINK_CACHE_FILE_SRC_DIR):
	mkdir -p $(LINK_CACHE_FILE_SRC_DIR)

$(LINK_CACHE_FILE_DEST_DIR)/$(LINK_CACHE_FILE):
	mkdir -p $(LINK_CACHE_FILE_DEST_DIR)
	echo '{}' > $(LINK_CACHE_FILE_DEST_DIR)/$(LINK_CACHE_FILE)

refcache-restore: $(LINK_CACHE_FILE_DEST_DIR)/$(LINK_CACHE_FILE) $(LINK_CACHE_FILE_SRC_DIR)
ifeq (refcache, $(REFCACHE))
	cp $(LINK_CACHE_FILE_DEST_DIR)/$(LINK_CACHE_FILE) $(LINK_CACHE_FILE_SRC_DIR)/
else
	@echo "SKIPPING refcache-restore"
endif

refcache-save:
ifeq (refcache, $(REFCACHE))
	cp $(LINK_CACHE_FILE_SRC_DIR)/$(LINK_CACHE_FILE) $(LINK_CACHE_FILE_DEST_DIR)/
	npx prettier --prose-wrap=always --write $(LINK_CACHE_FILE_DEST_DIR)/$(LINK_CACHE_FILE)
else
	@echo "SKIPPING refcache-save"
endif

check-links: $(GET_LINK_CHECKER_IF_NEEDED) \
	refcache-restore check-links-only refcache-save

check-links-only:
	$(HTMLTEST) $(HTMLTEST_ARGS)

clean:
	rm -rf $(HTMLTEST_DIR) public/* resources

get-link-checker:
	rm -Rf $(HTMLTEST_DIR)/bin
	curl https://htmltest.wjdp.uk | bash -s -- -b $(HTMLTEST_DIR)/bin
