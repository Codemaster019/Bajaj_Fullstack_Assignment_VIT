# Bajaj_Fullstack_Assignment_VIT

# BFHL API

A simple **Node.js + Express REST API** that processes an array of mixed data and returns categorised results.

---

## Features

- Accepts an array of strings via **POST** request.
- Returns:
  - **User ID** in format `full_name_ddmmyyyy`
  - **Email** and **College Roll Number**
  - **Odd numbers**, **Even numbers** (numbers returned as strings)
  - **Alphabets** (converted to uppercase)
  - **Special characters**
  - **Sum of all numbers** (as a string)
  - **Concatenation of all alphabetical characters** in reverse order with alternating caps
- Handles exceptions gracefully.

---

## Environment Variables

**For assignment purposes, `.env` is included publicly and is not included in .gitignore**

## Postman

Use https://bajaj-fullstack-assignment-vit.vercel.app/bfhl as a POST request in Postman and give a sample raw JSON data like { "data": ["2","a","y","4","&","-","5","92","b"] } to see the success response


