---
title: mybatis基本用法、springboot集成

---  

mybatis在springboot里面使用

## 配置文件   
``` xml
<!-- DTD约束 -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!-- 名称控件 -->
<mapper namespace="com.example.thymeleaf.dao.BannerDao">
<!-- 
  select 查询标签
  id 调用方法唯一标识、根据namespace里面查找标识（命名空间BannerDao里面的方法）
  resultType 结果类型 查询出来的数据返回的对象（结果映射对象的类型）
  paramType 参数类型  即传入的参数的类型

  参数传入 #{参数名称}
  id=#{id}
 -->
    <select id="getBannerByIdDao" resultType="com.example.thymeleaf.entity.BannerEntity">
        select  * from tb_banners
    </select>

    <select id="getBannerById" resultType="com.example.thymeleaf.entity.BannerEntity" paramType="String">
        select  * from tb_banners where id=#{id}
    </select>

</mapper>
```

<!-- 修改  -->
update tb_banners set name=#{name}, age=#{age} where id=#{id}

<!-- 删除 -->
delete from  tb_banners where id=#{id}


## 基础使用步骤
### 加载核心配置文件
Resources 加载资源的工具类
``` java 
String resource = "org/mybatis/example/mybatis-config.xml";
InputStream inputStream = Resources.getResourceAsStream(resource);
```

### 获取sqlSessionFactory工厂对象  
使用 SqlSessionFactoryBuilder
``` java
SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
```

###  selSession对象  
通过sqlSession工厂对象获取selSession对象
openSession 方法 空参数或者false需要手动处理事务，传true使用默认事务
``` java
SqlSession sqlSession = sqlSessionFactory.openSession()
```

### 执行映射sql语句
openSession执行语句的方法  
selectList  执行一个查询语句 返回list
selectOne  执行一个查询语句 返回对象
insert  执行插入语句  
update
delete  
commit 提交事务
rollback 回滚事务
close 释放资源
``` java
List<Student> students = sqlSession.selectList("StudentMapper.SelectAll")
```

### 处理结果
。。。





## springboot集成mybatis
### springboot,创建maven项目


### pom文件导入jar包

``` yml
spring:
  datasource:
    druid:
      #MySQL
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://localhost:3306/renren_security?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai&nullCatalogMeansCurrent=true
      username: root
      password: 123456
```


### springMVC 接收参数
接收参数：
#### 路由传参 PathVariable  
路径里面的参数
``` java
//    路由传参
  @GetMapping("banner/{id}")
  public BannerEntity getByMyId(@PathVariable(value = "id") String id ) {
      BannerEntity banner = bannerService.getBannerById(id);
      return banner;
  }
```

#### search传参 RequestParam  
路径后面的参数 url?id=123
``` java
//    search传参
  @GetMapping("banner/id")
  public BannerEntity getByMyId2(@RequestParam(value = "id") String id) {
      BannerEntity banner = bannerService.getBannerById(id);
      return banner;
  }
``` 


#### body参数   
用一个对象接收  
``` java
  @PostMapping("banner/insert")
  public int addBanner(@RequestBody BannerEntity bannerEntity) {
      BannerEntity banner = new BannerEntity();
      banner.setConditionId(bannerEntity.getConditionId());
      banner.setType(bannerEntity.getType());
      banner.setUrl(bannerEntity.getUrl());
      int res = bannerService.addBanner(banner);
      return res;
  }

```


