---
title: "10 Must-Know Tips for Better Scripting in  ServiceNow"
description: "Struggling with ServiceNow scripting? Or maybe do you wanna learn something possibly new ? Efficiency is key in today's fast-paced tech world. This carousel..."
pubDate: 2023-10-21
tags: ["servicenow"]
heroImage: "/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-hero-blog.png"
ghostSlug: "10-must-know-tips-for-better-scripting-in-servicenow-2"
draft: false
---

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-51.png)

Struggling with ServiceNow scripting?

Or maybe do you wanna learn something possibly new ?

Efficiency is key in today's fast-paced tech world.

This carousel offers you **10 must-know tips** to master scripting in ServiceNow, all aimed at making your code cleaner, faster, and more reliable.

**Don't miss out!**

---

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-52.png)

**Typos are really common bugs.**

**Autocompletion saves time and minimizes typos,** helping you to code more efficiently and accurately.

When you try to use variable you defined always make sure to use **ctrl + space** and then **hit enter to use.**

**Example:**

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-53.png)
*Picture illustrating when I started typing the variable name and then pressed ****ctrl + space*****

---

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-54.png)

**Do it in order to see:**

-   **Records** (**use case**: check sys\_id or copy encoded query)
-   **Columns** (**use case**: to make sure that the column’s name is correct)

**Example:**

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-55.png)
*****Right click**** table name and then go to ****"Show Definition"**** or ****"Show Data"*****

---

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-56.png)

Second parameter in gs.log() is **source**.

How to use:

“gs.log(’value is:” + value, **‘lukasz\_log’**);

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-57.png)
*Underlined is the log*

Logging with a **source** makes it **easier** to **filter logs** and **debug issues.**

**Example:**

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-58.png)

---

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-59.png)

Converting an **object** to a **string** representation aids **debugging** and **logging**.

Use whenever you need to **log** or **examine** an **object**.

When you try to gs.log object without stringify it will print **\[object Object\]** which doesn’t give you much.

**Lets see it in an example:**

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-60.png)

**gs.log(obj):**

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-61.png)

But when you use **JSON.stringify(obj)** it’s much better:

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-62.png)

**gs.log(JSON.stringify(obj):**

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-63.png)

---

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-64.png)

Converting a **string** into an **object** allows you to **manipulate** it **programmatically**.

When you have received data as a **string** and need to work with it as an **object** use **JSON.PARSE()**.

**JSON.PARSE()** and **JSON.STRINGIFY()** are **essential** when working with object

(For example in scripts that handle **integration**)

---

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-65.png)

Using **.get()** is the most efficient way to fetch a **single**, **unique record.**

When you know the **sys\_id** or other **unique identifier (like Incident number)** and only need **one record.**

**Example:**

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-66.png)

---

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-67.png)

Knowing the **type** of your **variables** is **crucial** for **type-specific operations and debugging.**

**Use** this especially before performing **operations** that are **type-sensitive.**

From experience I can tell that **significant** amount of **errors** is because of operations on **wrong type of variable.**

As you can see addition didn’t go as we would expect because of **type difference:**

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-68.png)

**Here are logs to better illustrate:**

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-69.png)

---

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-70.png)

**Visually** constructing a **query** ensures **accuracy** and can be **directly copied** into your **script**.

Use whenever you are **unsure** of the **syntax** or **complexity** of a **query**.

**How?**

Use the **table's UI** to **construct** your **query**, then **right-click** and choose **‘Copy Query’.**

First I **constructed** the **query**, then i will **copy** and **paste** it into my **Script’s GlideRecord’s Encoded Query**:

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-72.png)

---

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-73.png)

It **centralizes** configuration and makes **maintenance easier.**

**Never hardcode sys\_id !**

Always **store sys\_id** of any record in **system properties.**

It is way easier to maintain and can be changed by a person that doesn’t code which is a big plus.

First create **property** which stores **sys\_id**:

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-74.png)

Then **use** it in a **script**:

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-75.png)

---

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-76.png)

Really useful **shortcut** to make **commenting** faster:

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-77.png)

---

![](/images/blog/10-must-know-tips-for-better-scripting-in-servicenow-2-image-78.png)

1.  **Use Ctrl + Space to see the variable names**
2.  **Right click on a Table Name when querying**
3.  **Use second par﻿ameter in gs.log()**
4.  **Make Objects Readable with JSON.stringify()**
5.  **Parse Strings into Objects with JSON.parse()**
6.  **Utilize .get() in GlideRecord**
7.  **Know your﻿ Data Types with typeof**
8.  **Construct and Copy Queries from Tables**
9.  **Store sys\_id in Script Properties**
10.  **Quickly﻿ comment by using CTRL + /**
