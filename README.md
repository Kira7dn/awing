# Campaign management application

The campaign management application is a small application written in React and using TypeScript. The application includes two tabs: Information tab and Sub-campaign tab.

# Technology: React + TypeScript + Material UI (Do not use any third-party libraries or solutions)

Github: https://github.com/Kira7dn/awing

Live demo: https://awing.vercel.app/

Requirement: https://demo.awifi.vn/Requirement

## Installation

To install the application, you need to install Node.js and npm on your computer. Then, you can clone this repository and run the following commands:

```bash
npm install
npm start
```

After running the `npm start` command, the application will run on localhost.

## Usage

- The application consists of 2 tabs [Information] and [Sub-campaign]
- When you open the application, the [Information] tab will be active by default.

  - In the [Information] tab, you can enter information about the campaign name and description.
  - The [Campaign name] field is required.

- In the [Sub-campaign] tab, you will see a list of sub-campaigns.

  - By default, Sub-campaign 1 is created and active.
  - You can add a new sub-campaign by clicking the Add (+) button.
  - A sub-campaign includes information about the sub-campaign (Sub-campaign name and Active status) and a list of ads for the sub-campaign.
  - By default, a sub-campaign contains one ad.
  - Each ad includes information about the ad (Ad name and Quantity).
  - The [Sub-campaign name] and [Quantity] fields are required.

- Add, edit, delete Ads:

  - You can add a new ad to the list by clicking the (+ Add) button.
  - Remove ads from the list by selecting and clicking the [Delete] button.
  - The ad list of a sub-campaign must be greater than 0.

- Validation function:
  - Case 1: When the submit button is not clicked, no error warning is displayed.
  - Case 2: After clicking the submit button, error warnings are displayed for all required fields in both tabs. Error warnings are also displayed for all sub-campaigns.
  - If all information in both tabs is valid (no warnings), you can click the submit button to complete the process. Otherwise, you need to fill in the required information correctly and perform validation with the required fields.

## Technical explanation
   - The application uses useContext and useReducer to create Global State as follows:
      State = {
         information: {
            name: string,
            describe?: string,
            error?: string | null,
         },
         subCampaigns: {
            id: number,
            name: string,
            status: boolean,
            error_name?: string | null,
            error_ads?: string | null,
            ads: {
               id: number,
               name: string,
               quantity: number,
               error_name?: string | null,
               error_quantity?: string | null,
            }[],
         }[],
         status: {
            isValid: boolean,
            currentSub: number,
         },
      }
   - Every time the user interacts and changes the input fields, the application will dispatch a corresponding action including "UPDATE_INFOMATION";"ADD_SUB_CAMPAIGN";"UPDATE_SUB_CAMPAIGN";"ADD_ADS";"UPDATE_ADS";"DELETE_ADS";"SET_IS_VALID";"SET_CURRENT_SUB" and change the state of the State, then the application will automatically re-render and update the user interface. At that time, the application will also check the data entered in the fields and update the corresponding error*** values.
   - After the [Submit] button is clicked, the validation function will be activated and check all error*** data in the Global State. If the result is false, the isValid value in State.status will be updated. At that time, the application will alert the error and activate the error state in the corresponding input fields.
   - After the user interacts and updates the input fields with appropriate values, the error state will be removed. At this point, the user can click the [Submit] button, and the application will alert the completion status.

## Author

The application was written by [Ducanh.le].

```