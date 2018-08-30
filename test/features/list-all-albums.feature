Feature: View all albums
  In order to check how many albums my site currently has
  As an user
  I want there to be a Gallery

  Scenario: Viewing the Gallery
    Given the Gallery component is present
    When the component is rendered
    Then I want the component to have an Album for each gallery in the site
    And I want the Album to hold a Thumbnail for each image in it
