# Task Description
Create a set of RESTful APIs to manage a “Magic Wand” entity. The APIs should include:

- Get: Retrieve a specific Magic Wand’s details.
- Get all: Retrieve a list of all Magic Wands.
- Create: Create a new Magic Wand.
- Authenticate: Authenticates a User and retrieves a token that allows access to additional endpoints.

Alongside this, create a frontend application that uses these endpoints. A [mockup](https://www.figma.com/file/NmOmc2yskzngEB0cQCxyH1/Magic-Wand?node-id=0:1&mode=dev) is provided for added clarity. This is just an example so feel free to create your own UI.

Make a seed file with two predefined users. There is no need for a registration form.

# Technology Requirements

- Client-side: Recommended to use React, but candidates can also choose Vue.
- Server-side: Recommended Node.js with Express, but candidate can choose any of:
  - Node.js: Express/Nest/Koa
  - Python: Flask/FastApi
  - GoLang: Gin/Echo
- Database: Choose any
  - Online solutions are fine if you're familiar with them
    - Mongo Atlas, ElephantSQL, for example
  - Offline
    - PostgreSQL, MySQL and Mongodb (**A Dockerized setup is mandatory**)

# Task Requirements

### Entity Details

#### MagicWand

- Properties:
  - Flexibility (string)
  - Owner (user who created wand)
  - Length (numeric)
  - Wood (enum: alder, acacia, apple, ash, blackthorn, cherry)

#### User

- Properties:
  - Username
  - Password

### API Implementation

The _get wand_ API should require authentication and return full details of a specific Magic Wand, i.e. the response would contain:

- flexibility
- owner
- length
- wood

The _get all wands_ API should be publicly accessible and return a list of Magic Wands, but only include the:

- owner
- wood

The _create a wand_ API should require authentication and allow the creation of a new Magic Wand with the specified properties (all of the fields are required).

The _authenticate_ API should receive a username and a password or return a JWT token if the credentials are correct, or if they're not - an error.

In summary, authenticated users can create new wands and get specific details about any wand, as well as do everything Guest users can do.

Guest users can only view the list of wands, showing only the `owner` and `wood` properties.

### Security

Use standard JWT authentication. Implement it on your own (middleware, auth endpoint). The use of libraries for JWT handling is allowed.

Make sure that authentication is being honored on both the frontend and the backend. Not all routes should be accessible on the frontend if you're not authenticated.

### Data Validation

Validate input data for the creation of Magic Wands. Make sure that `wood` cannot contain values outside of the enum given in the assignment's text, make sure that `length` is a number larger than 0.

### Submission

- Commit your code to this repository.
- Try to separate commits in logical groups, i.e. when you get something working, you can commit that, you don't have to commit whole features. Likewise, you should avoid committing broken code.
- **Edit this README** (delete the assignment text) when you're done and list out any relevant instructions on how to set up and run the applications / any shortcomings / anything you feel we should know when we're looking at your solution. **It is required that you leave commands that we can run to get the project up and running** (Docker commands for the backend, npm commands for the frontend, etc.) Do your best to make sure that the commands are just runnable on any machine and that no specific setup is required (if it's required, list out the specific steps).

# Evaluation Criteria

Focus on getting as much of the task completed in the best possible quality you can produce. Quality > quantity, so focus on writing good code more than on finishing everything in the assignment.

Functionality: APIs meet the specified requirements. The navigation on the frontend is correct.

Code Quality: Clean, readable, and well-organized code.

Documentation: Clear and concise documentation, both in code and in the README.

# Additional Notes

Consider using environment variables for sensitive information.

Focus on the backend implementation; the frontend part can be minimalistic if React is used.

Ensure the application is easily deployable and runnable for evaluation. So **make sure you write/edit this README so we can follow steps for testing your task**

Feel free to use libraries, i.e. use a UI library for the frontend to make it easier for you to implement the UI.

# Bonus

If you find this task easy, fell free to implement a few additional things:

- Document the APIs (consider using tools like Swagger for API documentation).
- Error Handling: Robust handling of edge cases and exceptions; user-friendly error messages in backend responses.
- Make your own UI that you styled on your own with your choice of styling tool.
- Write some tests.

---

**The submission deadline is 72 hours from the receipt of this task.**

Good luck with your implementation! We look forward to reviewing your solution.
