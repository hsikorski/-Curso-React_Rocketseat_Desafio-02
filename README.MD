## Install

on terminal
```
yarn 
```

## To run

on terminal
```
yarn dev
```

## To test

on terminal
```
yarn test
```

## Using on insomnia

To list
```
{{ base_url  }}/repositories


```

To create
```
{{ base_url  }}/repositories
{
	"title": "xxx",
	"url": "https://www.xxx.com.br", 
	"techs": ["xx", "xx", "xx"]
}
```

To edit
```
{{ base_url  }}/repositories/:id
{
	"title": "xxx",
	"url": "https://www.xxx.com.br", 
	"techs": ["xx", "xx", "xx"]
}
```

To add likes
```
{{ base_url  }}/repositories/:id/like
```

To add del
```
{{ base_url  }}/repositories/:id
```