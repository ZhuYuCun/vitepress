


## 配置  
<!-- yml配置 -->
静态访问：
``` yml
spring:
  web:
    resources:
      static-locations: classpath:/templates/,classpath:/static/
```  



## 控制器  
1、使用`@Controller`注解，不能使用@RestController  
2、设置html页面所需属性、使用Model对象参数  
3、返回页面的方式：  
  1）modelAndView  
  2）html页面字符  

``` java
@Controller
@RequestMapping("/web")
public class TestController {

    @GetMapping("index")
    public ModelAndView testPage() {
        ModelAndView modelAndView = new ModelAndView("index");
        return modelAndView;
    }

    @GetMapping("users")
    public String indexPage(Model model) {
        model.addAttribute("msg", "Hello, Thymeleaf!");
        return "users";
    }
}
```

## thymeleaf语法  
1、声明命名空间
2、变量使用 `th:text`   
3、引入资源  
``` html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <!-- 引入资源，不用绝对路径（/xxx）会带入控制器的前缀 -->
    <link rel="stylesheet" type="text/css" th:href="@{/css/index.css}"/>
</head>
<body>
首页
<div>
    div内容
</div>
<!-- 变量使用 Model.addAttribute  设置的变量可用-->
<h1 th:text="${msg}"></h1>大家好！
</body>
</html>
```

