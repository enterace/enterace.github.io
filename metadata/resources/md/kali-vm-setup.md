# Installing Kali Linux on VirtualBox

This guide will walk you through the process of installing Kali Linux on VirtualBox, a popular virtualization software. VirtualBox allows you to run multiple operating systems on your computer without interfering with your primary operating system. Kali Linux is a Debian-based Linux distribution designed for penetration testing and cybersecurity.

## Prerequisites

Before you begin, ensure that you have the following:

1. VirtualBox: Download and install the latest version of VirtualBox from the official website ([https://www.virtualbox.org](https://www.virtualbox.org)).
2. Kali Linux ISO: Download the latest Kali Linux ISO image from the official Kali Linux website ([https://www.kali.org/downloads](https://www.kali.org/downloads)).

## Step 1: Create a new Virtual Machine

1. Launch VirtualBox.
2. Click on the "New" button to create a new virtual machine.
3. Enter a name for your virtual machine (e.g., "Kali Linux").
4. Select "Linux" as the type.
5. Choose "Ubuntu (64-bit)" as the version.
6. Allocate an appropriate amount of memory for your virtual machine (at least 2 GB is recommended).
7. Select "Create a virtual hard disk now" and click "Create".

## Step 2: Configure the Virtual Machine

1. Choose the virtual hard disk file type. The default "VDI (VirtualBox Disk Image)" option should work fine.
2. Select "Dynamically allocated" for the storage on physical hard disk.
3. Allocate an appropriate amount of disk space for your virtual machine (at least 20 GB is recommended).
4. Click "Create" to create the virtual machine.

## Step 3: Install Kali Linux

1. Right-click on the newly created virtual machine and select "Settings".
2. In the "Settings" window, navigate to the "Storage" tab.
3. Under the "Controller: IDE" section, click on the icon with a CD symbol.
4. Select "Choose a disk file" and browse to the location where you downloaded the Kali Linux ISO file.
5. Click "OK" to save the settings.

## Step 4: Start the Virtual Machine

1. Select the Kali Linux virtual machine from the VirtualBox main window.
2. Click on the "Start" button to launch the virtual machine.
3. The Kali Linux installer should start. Select the "Graphical Install" option to proceed with the installation process.

## Step 5: Install Kali Linux

1. Follow the on-screen instructions to configure the language, location, and keyboard settings.
2. Provide a hostname for your Kali Linux installation.
3. Configure the domain name, if necessary.
4. Set the root password and create a new user account.
5. Partition the virtual hard disk according to your preferences. The guided partitioning option is recommended for beginners.
6. Wait for the installation process to complete.
7. When prompted, choose the network mirror closest to your location for package installation.
8. Select the software packages you want to install. The default options should be sufficient for most users.
9. Wait for the package installation to finish.

## Step 6: Complete the Installation

1. After the installation is complete, the installer will prompt you to install the GRUB bootloader. Choose "Yes" to install GRUB.
2. Select the hard disk where you installed Kali Linux (usually the default option).
3. Once the installation is finished, the virtual machine will reboot.
4. Remove the Kali Linux ISO file from the virtual machine's storage settings.
5. Kali Linux should now boot up in VirtualBox.

Congratulations! You have successfully installed Kali Linux on VirtualBox. You can now explore and utilize the various tools and features offered by Kali Linux for penetration testing and cybersecurity purposes.

Remember to keep your Kali Linux installation updated by regularly installing updates and security patches using the package manager. Enjoy using Kali Linux in a virtualized environment!