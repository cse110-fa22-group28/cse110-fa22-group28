# Deployment Platform Choice

## Context and Problem Statement

A web application is useless if it's not deployed on the web. We needed to find a fitting platform to actually deploy our site on.

## Decision Drivers

* Primary driver: platform that is able to correctly and easily show our webpage
* Secondary driver: platform that can automatically deploy new updates and has a free service

## Considered Options

* Heroku
* Netlify

## Decision Outcome

Chosen option: Netlify because it satisfied all the decision drivers, whereas Heroku did not satisfy the primary driver.
It did not have native support for vanilla JavaScript, meaning we couldn't deploy the webpage through its service.

### Consequences

* Good, because we are able to freely deploy a site (with automatic re-deploys)
* Bad, because there is limited data usage with the free hosting option

## Pros and Cons of the Options

### Heroku

* Good, because there is a free deployment option
* Good, because there are a rich variety of customization features for how deployment is handled
* Neutral, because data is limited on the free plan but we won't be using even close to the data limitation.
* Bad, because there is no native support for vanilla javascript, meaning the page can't be deployed without making complicated modifications

### Netlify

* Good, because there is a free deployement option
* Good, because there are a rich variety of customization features for how deplooyement is handled
* Good, because there is support for vanilla javascript, meaning our page can be deployed on the web!
* Neutral, because data is limited on the free plan but we won't be using even close to the data limitation

<!-- This is an optional element. Feel free to remove. -->
## More Information

Live Site: [https://stonks-chore-tracker.netlify.app/](https://stonks-chore-tracker.netlify.app/)

> Credit: This template was designed by the owners of the `Architectural Decision Records` [repository](https://github.com/adr/madr/blob/main/template/adr-template.md)
