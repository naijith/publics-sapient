# publics-sapient take home assessment
---

due to time constraints from my end , i havent done the ❌ out items. 
---


Problem Statement 

Footbal Standing 

Problem Statement (Full Stack – UI, Service + CI/CD) 
 
Develop, Test and Deploy a microservice to find standings of a team playing league football match using country name, league name and team name; 
• End user should be able to view results by changing the input parameters  ✅
• The service should be ready to be released to production or live environment  ✅
• The service should be accessible via web browser or postman (using any one of JavaScript frameworks, HTML or JSON)  ✅
• The solution should support offline mode with toggles ❌ 
• The service should return relevant results as expected, even while the underlying dependencies (Ex: Public API) are not available! ❌ 
 
(Use your own code/logic/data structures and without 3rd party libraries or DB) 
 
API Data Sources 
API: https://apifootball.com/documentation/#Standings 
Key: 9bb66184e0c8145384fd2cc0f7b914ada57b4e8fd2e4d6d586adcc27c257a978 
Documentation: https://apifootball.com/documentation/ 
 
Expected output   ✅
(via an UI mechanism of your choice – Ex: React page) 
Country ID & Name: (<ID>) - <name> 
League ID & Name: (<ID>) - <name> 
Team ID & Name: (<ID>) - <name> 
Overall League Position: <position> 

NFRs  
• Demonstrate SOLID, 12 Factor and HATEOAS principles, Design Patterns in the design and implementation  ✅ (didnt use hateos)
• Demonstrate Performance, Optimization & Security aspects  ✅
• Demonstrate Production readiness of the code  ✅
• Demonstrate TDD & BDD & Quality aspects ❌ , you can use junit, mockito to do unit-test
• Demonstrate sensitive information used in the Micro Services such as API keys are protected / encrypted  ✅ 
 
Documentation  
• Include the open-API spec./Swagger to be part of the code. Should be able to view API via swagger (Documentation to explain the purpose of the API along with Error codes that the service consumers & client must be aware of!) ✅
• Create a README.md file in the repository and explain the design and implementation approach - partial
• In the README, add a sequence diagram or flowchart created using draw.io – https://www.draw.io ❌ 
• Mention the design patterns used in the code 
 
Build & Deploy  ❌ 
CI 
• Build CI/CD pipeline for your project(s); Pipeline scripts need to be part of the codebase; 
• Ensure the Jenkins job config., scripts are a part of the project sources 
CD 
• Demonstrate the service deployment using a Docker container (Create a docker image and publish service locally) 
• Ensure the docker files are a part of the project sources 

Share the sources as a zip file via Google drive  along with the executable uber jar with all dependencies to narra.reddy@publicissapient.com after completing code base solution for given question  offline   
 
Instructions reg. IDE  
 
• Only 8080 port is available on preview panel. Configure your application on 8080 port only. 
• If QuizME is not accessible for full length coding due to network/bandwidth or any other constraints, please: 
1. Share a screenshot of the issue you are facing 
2. Use your local system & favorite IDE for Development and Testing, and for submission. 
3. Upload the project files to QuizME (using the “Upload Files” option in QuizME) 