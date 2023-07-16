# [Arjit - CLI Card](https://www.npmjs.com/package/arjit)

An interactive Command Line Interface (CLI) that provides information about me, Arjit, as well as options to download my resume, schedule a meeting, or send an email. 

## Features

- Displays a card with my information in a terminal window.
- Links for quick access to my [GitHub](https://github.com/arjitsrivastava/), [LinkedIn](https://www.linkedin.com/in/arjitsrivastava/), and personal website.
- Option to download my latest resume directly from the terminal.
- Quick link to schedule a meeting via Calendly.
- Email option that opens your default email client with my email pre-populated.

## Usage

1. Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine.
2. In your terminal, use the command `npx arjit` to run the CLI.

## Development

This project uses several dependencies:

- `chalk` and `boxen` for creating the terminal UI
- `inquirer` for creating interactive prompts
- `ora` for loading animations
- `open` for opening URLs and files

## Feedback

If you have any feedback, please feel free to reach out to me at:

```python
def decode(encoded_email):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    decoded_email = ""
    for char in encoded_email:
        if char.isalpha():
            new_index = (alphabet.index(char.lower()) - 2) % 26
            if char.isupper():
                decoded_email += alphabet[new_index].upper()
            else:
                decoded_email += alphabet[new_index]
        else:
            decoded_email += char
    return decoded_email

encoded_email = "ctlkvutkxcuvcxc13@iockn.eqo"
print(decode(encoded_email))
