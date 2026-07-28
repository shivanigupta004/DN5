# Student Course Portal

This Angular 20 standalone application implements a progressive Student Course Portal for the Angular hands-on lab series.

## Project overview

The app includes a home page, a course catalog, course cards, a student profile page, routing, and a form-driven enrollment experience.

## Hands-on progress

### Hands-on 1
- Created the Angular Student Course Portal shell.
- Added a header component with navigation.
- Built a home page, course list page, and student profile page.
- Configured routing for the main portal screens.

### Hands-on 2
- Demonstrated interpolation, property binding, and event binding.
- Added a course card component with typed course input.
- Implemented parent-child communication using input and output events.
- Added an enrollment panel to show the selected course.

### Hands-on 3
- Added structural and styling examples using Angular directives.
- Implemented a custom highlight directive.
- Added a custom credit label pipe.
- Included loading and no-courses states for a more polished UI.

### Hands-on 4
- Built a template-driven enrollment form.
- Added validation for required fields, minimum length, email format, and agreement checkbox.
- Included inline validation messages and reset functionality.
- Added success feedback after a valid submission.

### Hands-on 5
- Introduced services for course data, enrollment state, and notifications.
- Wired the catalog and cards to shared service state.
- Added a profile view that reflects the current enrolled courses.

### Hands-on 6
- Added route-based course detail and nested course layout views.
- Implemented route guards and a deactivate guard for form navigation.
- Added a not-found route and a richer navigation experience.

### Hands-on 7
- Built a reactive enrollment form with FormBuilder and reactive controls.
- Added custom validators and async validation for email input.
- Included a FormArray for managing additional course suggestions.

### Hands-on 8
- Added lazy-loaded enrollment feature routes.
- Improved the home page with direct navigation to the enrollment experiences.
- Kept the portal modular and ready for future HTTP and state-management enhancements.

### Hands-on 9
- Added unit tests for the course and enrollment services.
- Updated the app shell test to validate the portal render path.
- Verified the project through build and test execution.

### Hands-on 10
- Integrated a real HTTP-backed course data source from the assets folder.
- Updated the home and detail views to consume asynchronous course data.
- Added notification support through the shared service layer.
- Verified the final portal end to end with a successful production build and passing tests.

## Development server

To start the app locally, run:

```bash
npm start
```

Then open http://localhost:4200/.

## Build

To build the project for production, run:

```bash
npm run build
```

## Tests

To run unit tests:

```bash
npm test
```

## Folder structure

- src/app/components - feature components for the portal
- src/app/models - shared TypeScript models
- src/app/shared - reusable pipes and directives
- Output - generated screenshots and verification images for the hands-on milestones

## Output folder

The Output folder contains visual artifacts captured during development and verification. It includes screenshots for Hands-on 1 through 10, along with the final test output and coverage snapshot for review and documentation purposes.

### Screenshot descriptions

- `Handson1_Output.png` - landing view of the student portal home page.
- `Handson2_Output.png` - course catalog with enrollment summary and course cards.
- `Handson3_Output.png` - course detail view for the selected course.
- `Handson4_Output.png` - template-driven enrollment form.
- `Handson5_Output.png` - reactive enrollment form experience.
- `Handson6_Output.png` - home page view used to demonstrate the portal shell.
- `Handson7_Output.png` - student profile page with profile details.
- `Handson8_Output.png` - general portal view used for the hands-on showcase.
- `Handson9_Output.png` - additional portal view captured for the hands-on summary.
- `Handson10_TestOutput.png` - final test verification view of the running app.
- `Handson10_Coverage.png` - coverage report snapshot for the completed test run.

## Technologies used

- Angular 20
- TypeScript
- Standalone components
- Angular routing
- Angular forms
- Custom directives and pipes
