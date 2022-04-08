const lambda = require('../index').handler


const payloadShortcut = 'cGF5bG9hZD0lN0IlMjJ0eXBlJTIyJTNBJTIybWVzc2FnZV9hY3Rpb24lMjIlMkMlMjJ0b2tlbiUyMiUzQSUyMlcyNWh2OXl5OXUxV2lVWmRnNXlaSW1kZSUyMiUyQyUyMmFjdGlvbl90cyUyMiUzQSUyMjE2NDk0MDYxNzYuNTcyNzc0JTIyJTJDJTIydGVhbSUyMiUzQSU3QiUyMmlkJTIyJTNBJTIyVDAyVU5WN1Y0R1olMjIlMkMlMjJkb21haW4lMjIlM0ElMjJ0ZXN0LXBhcnNpbmctd3AlMjIlN0QlMkMlMjJ1c2VyJTIyJTNBJTdCJTIyaWQlMjIlM0ElMjJVMDJVQUI4SFVGTSUyMiUyQyUyMnVzZXJuYW1lJTIyJTNBJTIyamFuLnJ1bmR0JTIyJTJDJTIydGVhbV9pZCUyMiUzQSUyMlQwMlVOVjdWNEdaJTIyJTJDJTIybmFtZSUyMiUzQSUyMmphbi5ydW5kdCUyMiU3RCUyQyUyMmNoYW5uZWwlMjIlM0ElN0IlMjJpZCUyMiUzQSUyMkMwMzNXTTlIR0FaJTIyJTJDJTIybmFtZSUyMiUzQSUyMmRlbW9fY2hhbm5lbCUyMiU3RCUyQyUyMmlzX2VudGVycHJpc2VfaW5zdGFsbCUyMiUzQWZhbHNlJTJDJTIyZW50ZXJwcmlzZSUyMiUzQW51bGwlMkMlMjJjYWxsYmFja19pZCUyMiUzQSUyMm1lc3NhZ2Vfc2hvcnRjdXQlMjIlMkMlMjJ0cmlnZ2VyX2lkJTIyJTNBJTIyMzM0OTExMDA4NTU1OS4yOTc0OTkzOTkwNTc3LjM3ODM2ZDY1MDI4MGE4NDQxMzg3ZWE1ZTYwYmE1MjJhJTIyJTJDJTIycmVzcG9uc2VfdXJsJTIyJTNBJTIyaHR0cHMlM0ElNUMlMkYlNUMlMkZob29rcy5zbGFjay5jb20lNUMlMkZhcHAlNUMlMkZUMDJVTlY3VjRHWiU1QyUyRjMzODc0NjM5NDU2OTYlNUMlMkZaWm1GRFNjTzVPN1E1TVFHSnIwZVFneXUlMjIlMkMlMjJtZXNzYWdlX3RzJTIyJTNBJTIyMTY0OTE0NTY4OS40ODAyMDklMjIlMkMlMjJtZXNzYWdlJTIyJTNBJTdCJTIyY2xpZW50X21zZ19pZCUyMiUzQSUyMjQ5YWQxODBmLTIxODItNGFiZS05ZDQxLWRlZWIyYTQxODk3ZSUyMiUyQyUyMnR5cGUlMjIlM0ElMjJtZXNzYWdlJTIyJTJDJTIydGV4dCUyMiUzQSUyMkVsb24rTXVzaytpcytsb29raW5nK2ZvcitoZWxwK29uK2NyZWF0aW5nK2ErbmV3K3NvY2lhbCttZWRpYStwbGF0Zm9ybS4rVGVjaG5vbG9naWVzK3Nob3VsZCtpbmNsdWRlK1dlYiszLjAlMkMrYmxvY2tjaGFpbiUyQytFVk0lMkMrc21hcnRjb250cmFjdHMlMkMrU29saWRpdHklMkMrUnVzdC4rUHJpY2UraG91cmx5KzEyMCU1Q3UyMGFjKyUyQitUZXNsYStzdG9jay4rRGVhZGxpbmUrNC45LjIwMjIuK1BNK2lmK2ludGVyZXN0ZWQuJTIyJTJDJTIydXNlciUyMiUzQSUyMlUwMlVIUFBSTUo2JTIyJTJDJTIydHMlMjIlM0ElMjIxNjQ5MTQ1Njg5LjQ4MDIwOSUyMiUyQyUyMnRlYW0lMjIlM0ElMjJUMDJVTlY3VjRHWiUyMiUyQyUyMmJsb2NrcyUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJyaWNoX3RleHQlMjIlMkMlMjJibG9ja19pZCUyMiUzQSUyMnAyUjA2JTIyJTJDJTIyZWxlbWVudHMlMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycmljaF90ZXh0X3NlY3Rpb24lMjIlMkMlMjJlbGVtZW50cyUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJ0ZXh0JTIyJTJDJTIydGV4dCUyMiUzQSUyMkVsb24rTXVzaytpcytsb29raW5nK2ZvcitoZWxwK29uK2NyZWF0aW5nK2ErbmV3K3NvY2lhbCttZWRpYStwbGF0Zm9ybS4rVGVjaG5vbG9naWVzK3Nob3VsZCtpbmNsdWRlK1dlYiszLjAlMkMrYmxvY2tjaGFpbiUyQytFVk0lMkMrc21hcnRjb250cmFjdHMlMkMrU29saWRpdHklMkMrUnVzdC4rUHJpY2UraG91cmx5KzEyMCU1Q3UyMGFjKyUyQitUZXNsYStzdG9jay4rRGVhZGxpbmUrNC45LjIwMjIuK1BNK2lmK2ludGVyZXN0ZWQuJTIyJTdEJTVEJTdEJTVEJTdEJTVEJTJDJTIydGhyZWFkX3RzJTIyJTNBJTIyMTY0OTE0NTY4OS40ODAyMDklMjIlMkMlMjJyZXBseV9jb3VudCUyMiUzQTIlMkMlMjJyZXBseV91c2Vyc19jb3VudCUyMiUzQTElMkMlMjJsYXRlc3RfcmVwbHklMjIlM0ElMjIxNjQ5MTQ3OTE1LjY5MDQ2OSUyMiUyQyUyMnJlcGx5X3VzZXJzJTIyJTNBJTVCJTIyVTAyVUhQUFJNSjYlMjIlNUQlMkMlMjJpc19sb2NrZWQlMjIlM0FmYWxzZSUyQyUyMnN1YnNjcmliZWQlMjIlM0FmYWxzZSU3RCU3RA=='
const payloadSlash = 'dG9rZW49VzI1aHY5eXk5dTFXaVVaZGc1eVpJbWRlJnRlYW1faWQ9VDAyVU5WN1Y0R1omdGVhbV9kb21haW49dGVzdC1wYXJzaW5nLXdwJmNoYW5uZWxfaWQ9QzAzM1dNOUhHQVomY2hhbm5lbF9uYW1lPWRlbW9fY2hhbm5lbCZ1c2VyX2lkPVUwMlVBQjhIVUZNJnVzZXJfbmFtZT1qYW4ucnVuZHQmY29tbWFuZD0lMkZ0ZXN0LXNlcnZ1dG9uJnRleHQ9NjAwJmFwaV9hcHBfaWQ9QTAyVUZQUVNMMVomaXNfZW50ZXJwcmlzZV9pbnN0YWxsPWZhbHNlJnJlc3BvbnNlX3VybD1odHRwcyUzQSUyRiUyRmhvb2tzLnNsYWNrLmNvbSUyRmNvbW1hbmRzJTJGVDAyVU5WN1Y0R1olMkYzMzc2NDg0MzQwNzM3JTJGNGFXeDJhR1N3WFlNR1NQQ1VXUWNSODZLJnRyaWdnZXJfaWQ9MzM0OTI3MDU2Mzc1MS4yOTc0OTkzOTkwNTc3LjcxMTY4NzcwMzI5NzhmYTRjNDEwNjdlOGFjYjhiZTlk'
const eventObj = {queryStringParameters: {route: 'slashCommand'},  body: payloadSlash}

const main = async (eventObj) => {
  const response = await lambda(eventObj)
  console.log(response)
}

main(eventObj)