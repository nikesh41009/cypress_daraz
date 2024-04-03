## README file
## Daraz Email Login Documentation
&copy; **Nikesh Devkota**

## Important Notice

I do not own Daraz or any of the code written to make it. My attempt is to simply show my automation skills related to Cypress. It is strictly prohibited to misuse this repository in any way. 

## Precondition

Before you can continue with the test, you should have registered valid acccounts by email in the Daraz database.

## Test Info

The tests used in this repo are in **BDD** format and uses a **POM** to pass methods and arguments. 

### You should follow the below steps to run Cypress Automation for this project.
1. Download **node js.** if you **don't intend** to use **docker containers**.
2. Clone the existing project from _[cypress_Daraz] (https://github.com/nikesh41009/cypress_daraz)_ into a folder of your choice.
4. Open up your terminal in your ide and **_cd_** into the **_the existing folder_**.
5. type **npm install** (**_not necessary if you are using Docker_**) in your **terminal**. This will install all the dependencies you will need for the project.
6. Look for **integration file**. Files inside the integration folder are meant to be run on browser for automation testing except the files within **_POM_** folder.
7. To run a file in cypress, type **npx run _filename_**. You can also type **npx cypress open** to run a file from **cypress dashboard**  
8. You can add custom cypress commands from **command.js** which is inside **support** folder.
9. You can also add a json file inside **fixtures** folder and **transfer data** from it to the test files.
10. You can add plugins in the **index.js** file inside **plugins** folder.


