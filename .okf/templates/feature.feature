# <mutation-stamp: add after the accepted feature is hardened>
# <feature-name> <stable scenario index> <short scenario name>
Feature: <feature name>

  Background:
    Given <shared deterministic setup>

  Scenario: <feature name> 01 <observable behavior>
    Given <initial state>
    When <user action>
    Then <observable result>

  Scenario: <feature name> 02 <edge behavior>
    Given <initial state>
    When <user action>
    Then <observable result>

  Examples:
    | value |
    | <relevant variation> |
