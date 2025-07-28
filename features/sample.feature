Feature: Display example page
  Scenario: Load example.com
    Given I open the page "https://example.com"
    Then the title should be "Example Domain"