# Agilify Tech Labs Website

## Introduction
This repo serves as a use case of using AI to generate a fully working website. 

## Tools Used
* ChatGPT
* Bolt

### ChatGPT
The first step was to geneate content for our website. We created a prompt as follows:

```
I want you to help me to come up with content for a website I am working on. It consists of different sections like hero section, what we do section, expertise section etc.

The website name is Agilify Tech Labs. It’s a consultancy company that mainly focuses on providing maintenance of existing simple websites and implementation of small changes like change in text, color etc. We mainly focus on the lifecycle of making a change like Development that includes code and unit testing, QA that includes manual or automation testing, other aspects like Analytics, Lighthouse, SEO, Sitemap, Github etc. and finally DevOps for deployment and verification. Expertise is on small websites build with HTML, CSS, JS, NextJS, Wordpress, React etc. The target audience is small companies or startups irrespective of domain that have got the website created from other sources and are trying to maintain in house. The idea is to take the pressure of maintaining the website from the individual or technical staff to our company. 

The content should be professional and be broken down into sections as mentioned above. You can add/update those sections as you see fit. 

Do a through research of the use case outlined above and generate in a tabular format, where the 1st column is the section name, 2nd column is the content, 3rd column is a image prompt for each section and each sub item in a section as per the content you will generate.
```

It is a simple prompt to get us started. This geneated a table that contained the section, content and image prompt.

Futher, we used ChatGPT image generation and use the above image prompt. This gave us good images most of the time.

### Bolt
We could have used ChatGPT or other AI code generators, but decided to give Bolt a shot. So we created the prompt:
```
A simple website using NextJS, TailwindCSS and ShadcnUI for components.

It consists of:
    * Header with logo agilify.png and a nav with Home, About Us and Contact.
    * Footer with the agility.png logo, copyright and sitemap
    * Hero section with image hero.webp
        * <Insert Heading Content>
        * <Inert Sub-heading Content>
        * CTA button
    * What We Do section
        * <Insert content>
        * what-we-do.webp image
    * Our Process -> sections should be card based
        * <Insert each item>
    * Expertise
        * <Insert each item>
    * Target Audience
        * <Insert content>
    * Contact Us
        * <Insert content>
        * contact.webp image

Feel free to add images for other sections which are not mentioned.
```

Bolt scafolded the project and we got a working website. Next we use couple more simple prompts to do the following:
* Generate unit tests -> Yet to execute the tests
* Geneate localization -> This did not work out of the box and had to use the documentation to get it working.
