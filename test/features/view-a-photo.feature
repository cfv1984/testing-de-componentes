Feature: View a photo in full size
  In order to view an album’s photo
  As an user
  I want to open the first Album and see its contents, then open its first Photo

  Scenario: Viewing a single Photo
    Given the Gallery component is present
    And the first album was selected
    When the Photos are visible
    Then I want to open a Photo
    And I want it to be marked as Open
    And I want its title to be shown in bold
    And I want a “Close” button to be present

  Scenario: Going back to the Album
    Given the first photo is Open
    When the “Close” button is activated
    Then I want the first Photo to be marked as Closed
    And I want the first Album to remain open
