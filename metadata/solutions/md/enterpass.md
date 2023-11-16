
# EnterPass Open-Source Password Manager

  

Securely store and manage your passwords with AES encryption and Argon2 master key hashing.

  

EnterPass is an open-source password manager developed by EnterACE repository. It is designed to securely store and manage passwords using AES encryption and Argon2 key hashing.

  

## Features

  

- AES encryption in CBC mode for secure storage of passwords

- Argon2 key hashing for enhanced password security

- User-friendly graphical user interface using the tkinter library

- Ability to add, edit, and delete passwords in the password manager

- Encrypted storage of passwords in a CSV database file

  

## Installation

  

You can either use the source code and run it as a Python script or install it via the Windows installer.

  

 - First, you need to download either the program source or the
   installer.

  

**After the download is complete:**

  

 - *If you have downloaded the source code, you can follow the
   installation process it the github.*

  

 - *If you have downloaded the installer:*

  

	1. Open the program as administrator

	2. Enter your preferred master password (32 character password is recommended. No more. No less.)

	3. Hit continue.

	4. Enter your master password again.

  

## Usage

  

**Note:** If you have downloaded the Windows installation program, you will need to run the program as an administrator to grant the app the ability to write changes to the database file.

  

**Each time you open the program, you will be asked for the master password.**

  

**Note:** If you lose your master password, there is **NO WAY** to retrieve it back. After the first opening of the program, you will be asked for the master password, and the password you enter will not be directly saved to the file system; it will be hashed using the Argon2 hashing algorithm. The only way you can retrieve your password is by cracking the Argon2 hash, which will be stored in the `key.hash` file next to the Python script or Windows executable. Please note that Argon2 takes an **eternity** to crack.

  

**After the download is complete:**

  

When you have entered your master password, the password manager will open and decrypt the passwords database.

  

In this panel to add a password, you will need to enter your preferred fields in the Inputs frame on the right side of the screen and then click on the "Add new password" button.

  

To edit a field in the database, you need to first enter the ID of the password row and then overwrite that with the other input fields and then click the "Edit password by ID" button.

  

To delete a password, you will need to enter the password row ID in the input panel and click on the "Delete password by ID" button.

  

## License

  

EnterPass is released under the MIT License.