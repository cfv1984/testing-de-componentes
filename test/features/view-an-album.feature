Feature: View an album’s contents
  In order to view an album’s contents
  As an user
  I want to open the first Album and see its contents, then the second one, and have the first one close before

  Scenario: Viewing an album’s photos
    Given the Gallery component is present
    And the first album was selected
    When album opens
    Then I want the Album to keep a list of Photos in it
    And I want its status to be marked as Open
    And I want each Photo to have a title, thumbnailUrl and an url

  Scenario: Opening another album
    Given the Gallery component is present
    And the first album was selected
    And then the second album was selected
    Then I want the first Album to have its status marked as Closed
    And I want the second Album to have its status marked as Open
    And I want each Album to have a list of Photos in it
