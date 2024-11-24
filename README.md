https://mysignature.io/



## 遇到的问题
### getting error `This document requires 'TrustedHTML' assignment` in chrome
https://stackoverflow.com/questions/61964265/getting-error-this-document-requires-trustedhtml-assignment-in-chrome

### 如何把邮箱签名填写到邮箱后边

```bash

escapeHTMLPolicy = trustedTypes.createPolicy("forceInner", {
    createHTML: (to_escape) => to_escape
})

.innerHTML = escapeHTMLPolicy.createHTML("<h1>your_html</h1>");
```

oss://ap-data-us-oss/signmaker/web/js13kpwa/




Design colored|branded

/assets/signoff/af3ace5e-0701-592c-ab09-b4cea72f38e1.png