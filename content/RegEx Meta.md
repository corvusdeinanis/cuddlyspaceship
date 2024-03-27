1. **Remove leading and trailing whitespace**: `/^\s+|\s+$/g`
   - This regex matches one or more whitespace characters (`\s+`) at the beginning (`^\s+`) or end (`\s+$`) of a string and replaces them with an empty string.

2. **Remove multiple consecutive spaces**: `/ +/g`
   - This regex matches two or more consecutive space characters and replaces them with a single space.

3. **Remove HTML tags**: `/<[^>]+>/g`
   - This regex matches any HTML tag (including its contents) and replaces it with an empty string. 

4. **Remove non-alphanumeric characters**: `/[^a-zA-Z0-9]/g`
   - This regex matches any character that is not a letter or digit and replaces it with an empty string.

5. **Remove digits**: `/\d/g`
   - This regex matches any digit character and replaces it with an empty string.

6. **Remove punctuation**: `/[^\w\s]/g`
   - This regex matches any non-word, non-space character (which includes punctuation) and replaces it with an empty string.

7. **Remove extra whitespace**: `/ +/g`
   - This regex matches one or more space characters and replaces them with a single space.

8. **Remove leading zeros from numbers**: `/(\b)0+(\d+)/g`
   - This regex matches leading zeros before a number and replaces them with an empty string while preserving the number itself.


`^\s+|\s+$`
