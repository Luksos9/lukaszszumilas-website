---
title: "ServiceNow Scoped Application  vs. Global Application: A Shopping Mall Analogy"
description: "Welcome to the ServiceNow Mall Imagine a mall with different stores and one central security office that oversees the entire mall. Scoped Application Each st..."
pubDate: 2023-11-12
tags: ["servicenow"]
heroImage: "/images/blog/servicenow-scoped-application-vs-global-application-a-shopping-ma.png"
ghostSlug: "servicenow-scoped-application-vs-global-application-a-shopping-mall-analogy"
draft: false
---

## Welcome to the ServiceNow Mall

Imagine a mall with different stores and one central security office that oversees the entire mall.

---

## Scoped Application

**Each** store in the **mall** is like a **scoped application**.

It operates **independently**, has its own staff (**users**), rules (**permissions**), inventory system (**tables**), and cash registers (**interface**).

Customers in one store **don’t have access** to the inventory of another store unless they physically **go there**, and the store **allows** them to browse their items.

### Similarly in ServiceNow

Similarly, in ServiceNow, a scoped application has its own set of tables, rules, and permissions.

It's designed to operate independently of other applications, which means it's self-contained, secure, and it doesn't interfere with others.

---

## Global Application

The mall’s central security office is like a global application.

It has access to all the stores' security cameras, alarms, and communication systems.

It needs to interact with all parts of the mall to function effectively.

### Similarly in ServiceNow

In ServiceNow, a **global application** has the ability to interact with all parts of the system.

It can **access all** **tables** and **data**, which makes it **powerful** but also means that it **needs** to be **managed carefully** to **avoid conflicts** or **security issues**.

---

## When to Use SCOPED APP

**Scoped Applications:**

-   When you want to build an application that is **isolated** from **others** to **prevent conflicts** in script names, table names etc.
-   When you need to ensure that the application’s components are not **visible** or **accessible** from **other applications** without **explicit permissions**.

### Examples

1) **Human Resources management** **tool**:

Designed to handle **sensitive** employee **data** and HR **processes**. It should be **separate** from other departments to maintain **confidentiality** and specialized functionality.

2) **Project Management System**:

A software development team uses a **scoped** application for **tracking** their agile sprints, user stories, and backlogs that are **relevant** only to **their** projects and **shouldn't** be **accessible** by other departments.

---

## When to Use GLOBAL APP

**Global Applications:**

-   When you need an application that **interacts** with **multiple** other **applications** and **services**.
-   When you **don’t need** the **strict isolation** provided by **scopes**.

### Examples

1) **Enterprise Reporting Platform:**

Reporting system that **pulls data** from **various** departments to create **comprehensive** performance **reports**. This **needs access** to **company-wide data** and thus would be **implemented** as a **global** application.

2) **Cross-Application Service Catalog:**

Integrated service catalog where employees from **any department** can request **various** items and services, ranging from IT equipment to human resources benefits. It **must interact** with **various** departmental systems to process these requests.

---

## Potential pitfalls

Okay, now when we know when to use each, let’s see what are potential **pitfalls** if we use **Global** App instead of **Scoped**.

**Global** applications in ServiceNow have the potential to **impact** other **applications** and the overall **system** because of their **unrestricted** access to the platform's resources.

---

### Example of 'var gr' Impact

Two server-side scripts declaring the **variable gr** in the global scope can **interfere** each other.

Such **overlap risks** overwriting the variable, leading to **unpredictable** outcomes.

Scoped Apps even if they had same **variable names** they would be in **different scope** (It’s working similar to **function scope**)

---

### Global Business Rules

**Global business** **rules** affect the entire system.

For instance, imagine you have a **global business rule** that **triggers** on every **insert** and **update** operation across all tables.

It can inadvertently **slow down** the entire system due to the **overhead** it causes on **transactions**.

**Scoped application's** **rules** are more **targeted** and **efficient**, activating **only** within its **designated** area

---

## Best Practices

### **Scoped Applications:**

-   **Limit** the **scope** to **only** what is **necessary** for the application to function.
-   Use scoped APIs to ensure compatibility and **prevent unauthorized** access to **other parts** of the ServiceNow platform.

### **Global Applications:**

-   Be **careful** with **global** applications as they can **potentially impact** other **applications** and the **overall** system.
-   **Minimize** the use of **global variables** and **functions** to avoid **conflicts** and **security** issues.
