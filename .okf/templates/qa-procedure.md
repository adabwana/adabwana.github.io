---
type: Template
title: End-to-end QA procedure template
description: Independent user-surface procedure corresponding to one feature.
tags: [template, qa, acceptance]
---

# QA: <feature title>

**Task:** `<stable-task-name>`
**Feature:** `features/<feature>.feature`
**Host:** desktop | browser | both

## Preconditions

* Run the documented build and launch command.
* Set up only user-visible fixtures or command-line QA affordances.
* Do not call project-private APIs.

## Procedure

1. <launch or navigate>
2. <provide user input>
3. <observe state, output, file, or host event>

## Pass criteria

* <observable result>

## Failure handling

Reproduce the failure, record command/host/input/output, and compare the
procedure with the accepted feature before changing behavior. Ask for
clarification if they disagree.

## Result

**Status:** pending
**Verified by:** pending
**Date:** pending
