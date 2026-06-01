---
title: "ServiceNow Reference Lists: Don't Make This Mistake"
description: "A small change to a reference qualifier can change what every user sees. Here is the reference-list mistake worth avoiding."
pubDate: 2023-10-30
tags: ["servicenow"]
heroImage: "/images/blog/servicenow-reference-lists-dont-make-this-mistake-hero-blog-images-1.webp"
ghostSlug: "servicenow-reference-lists-dont-make-this-mistake"
draft: false
---

When working with ServiceNow, it's essential to understand how reference lists operate.

A simple task can have unintended consequences if you're not careful.

Lets see this on an example.

---

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-152.webp)

For 659 groups given in excel file add new type of “approval”.

---

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-153.webp)

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-154.webp)

---

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-155.webp)

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-156.webp)

---

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-157.webp)

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-158.webp)

Use **ctrl + shift + down arrow** to mark all groups.

Then copy **ctrl + C.**

---

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-159.webp)

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-160.webp)

And then copy the **query**.

We will need it as **encodedQuery**.

---

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-161.webp)

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-162.webp)

First lets **store** in **variable** our **encoded query** as it is quite long (659 groups)

---

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-163.webp)

As “**type**” field in “**Groups**” table is a **reference list,** we will need **sys\_id** of “**type**” **record** to be sure we selected **exactly** record we want.

For that I go to **“sys\_user\_group\_type.LIST”** and copy **sys\_id** of **“approval”**:

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-164.webp)

---

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-165.webp)

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-166.webp)

---

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-167.webp)

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-168.webp)

---

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-169.webp)

Well the answer is **NO.**

There is quite big **mistake** in this code.

**Do you see what can it be?**

**Have a look first** and we will explore it in the next slide.

---

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-170.webp)

It’s the line 17. The one I **highlighted**.

Reference List stores reference to records in other table.

By writting: **“grGroup.type = newType;”** we just **replaced all** what was currently there with new value instead of adding it.

On Slide 4 you can see that there was already existing type.

Now it got replaced.

---

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-171.webp)

**We need to:**

1\. Store existing values in a variable.

2\. Add new type to the list.

3\. Set new constructed list as the “type”

This script on next slide will do that.

---

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-172.webp)

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-173.webp)

---

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-174.webp)

The Script I provided on Slide 15 is decent, but still it lacks something crucial for such task.

Can you guess what is that ?

Let me know in the comments.

Certainly it can also be written in other ways, let me know if you would like to see them.

---

![](/images/blog/servicenow-reference-lists-dont-make-this-mistake-image-175.webp)

**List mutability** is a fundamental concept in programming.

**Overlooking** this can lead to **data loss** or **incorrect** data representation.

Always be attentive to how lists work in ServiceNow and avoid making this mistake.
