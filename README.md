# bountyScan

This was my final year project for my Computer Science degree at Middlesex University.

How it works:

The website connects to a DigitalOcean virtual private server through a SSH connection made with Node.js, the VPS will start a shell script I wrote to use tools like Nmap, SQLmap, Dmitry ecc. to scan the target; Once the scan is complete a report will be prepared with a Python script and sent to the email.
