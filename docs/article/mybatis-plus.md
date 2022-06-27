
## mybatis-plus 集成到 spring-boot  

#### 导包
``` xml
<!-- pom.xml -->
<!-- mybatis-plus导入 -->
    <dependency>
        <groupId>com.baomidou</groupId>
        <artifactId>mybatis-plus-boot-starter</artifactId>
        <version>3.5.2</version>
    </dependency>

    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>

    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <scope>runtime</scope>
    </dependency>
```

#### 配置
``` yml
spring:
#  配置数据源信息
  datasource:
#    数据源类型
    type: com.zaxxer.hikari.HikariDataSource
    # type: com.alibaba.druid.pool.DruidDataSource
#    配置数据库的各个信息
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/mybatis_plus?characterEncoding=utf-8&userSSL=false
    username: root
    password: 123456
```


#### 分页查询

mybatis-plus配置
``` java
@Configuration
@MapperScan("net.zhuyucun.website.mapper")
public class MybatisPlusConfig {

    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));

        return interceptor;
    }
}

```

分页实现
``` java
// page 当前页 、条数  如第1页  3条每页
@GetMapping("/banners")
public Page<Banner> getAll() {
    Page<Banner> page = new Page<>(1, 3);
    bannerMapper.selectPage(page, null);
    return page;
}

```