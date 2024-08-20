---
title: Encryption - Cloud
tags:
  - cloudcomputing
---
# What is Encryption?
Encoding data to ensure that no one but the recipient can access/read
using mathematical algorithms
protecting it from malicious people

**converting plaintext -> ciphertext using mathematical algorithms**, protecting it from malicious users 
### What is Cloud Encryption?
**converting plaintext -> ciphertext using mathematical algorithms**  ***before*** data is transferred to cloud 
### Decryption
ciphertext -> plaintext
using same key
### Why?
- Even if data is stolen / there is a breach, data cannot be read or accessed without the key 
- protects sensitive data 
- ensures only authorized have access 

## How Does Encryption Work?

data -- algorithms + encryption 🔑 --> encrypted data 
```mermaid
graph LR
C(text)--encryption--->A(cipher text)
A--decryption-->C
```

## Cloud Encryption Types
Data is in either of  two states in the cloud
- transit - data in transit is when data is being moved to or from the cloud  
- rest - data at rest is when it is just being stored 

### Data Encryption in Transit
HTTPS Protocol - provides security socket layer (SSL)
### Data Encryption at Rest
data encypted so even if someone accesses it, it is worthless jumble of gibberish 
##### Multi-factor Authentication (MFA)
- something only you know
- something only you have
- something that is part of you (biometric)

---
see also: salting and [[hashing]] textfiles
[[entropy]]
security by obscurity
sha256, md5
aes
