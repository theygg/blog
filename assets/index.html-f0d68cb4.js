const t=JSON.parse('{"key":"v-deeaea4e","path":"/pages/2d0b5c/","title":"手写模拟SpringBoot核心流程","lang":"zh-CN","frontmatter":{"title":"手写模拟SpringBoot核心流程","date":"2022-11-14T11:32:25.000Z","permalink":"/pages/2d0b5c/","author":{"name":"江"},"category":["微服务","SpringBoot原理"],"description":"内容： 1、手写模拟SpringBoot启动过程 2、手写模拟SpringBoot条件注解功能 3、手写模拟SpringBoot自动配置功能 4、SpringBoot整合Tomcat底层源码分析 通过手写模拟实现一个Spring Boot，让大家能以非常简单的方式就能知道Spring Boot大概是如何工作的。 完整的代码地址：https://gitee.com/archguide/zhouyu-springboot","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/2d0b5c/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"手写模拟SpringBoot核心流程"}],["meta",{"property":"og:description","content":"内容： 1、手写模拟SpringBoot启动过程 2、手写模拟SpringBoot条件注解功能 3、手写模拟SpringBoot自动配置功能 4、SpringBoot整合Tomcat底层源码分析 通过手写模拟实现一个Spring Boot，让大家能以非常简单的方式就能知道Spring Boot大概是如何工作的。 完整的代码地址：https://gitee.com/archguide/zhouyu-springboot"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-24T11:27:53.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2022-11-14T11:32:25.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-24T11:27:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"手写模拟SpringBoot核心流程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-14T11:32:25.000Z\\",\\"dateModified\\":\\"2023-05-24T11:27:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"依赖","slug":"依赖","link":"#依赖","children":[]},{"level":2,"title":"核心注解和核心类","slug":"核心注解和核心类","link":"#核心注解和核心类","children":[]},{"level":2,"title":"run方法","slug":"run方法","link":"#run方法","children":[]},{"level":2,"title":"创建Spring容器","slug":"创建spring容器","link":"#创建spring容器","children":[]},{"level":2,"title":"启动Tomcat","slug":"启动tomcat","link":"#启动tomcat","children":[]},{"level":2,"title":"实现Tomcat和Jetty的切换","slug":"实现tomcat和jetty的切换","link":"#实现tomcat和jetty的切换","children":[]},{"level":2,"title":"模拟实现条件注解","slug":"模拟实现条件注解","link":"#模拟实现条件注解","children":[]},{"level":2,"title":"模拟实现自动配置类","slug":"模拟实现自动配置类","link":"#模拟实现自动配置类","children":[]},{"level":2,"title":"发现自动配置类","slug":"发现自动配置类","link":"#发现自动配置类","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1684927673000,"updatedTime":1684927673000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":10.95,"words":3286},"filePathRelative":"微服务/00.SpringBoot原理/00.手写模拟SpringBoot核心流程.md","localizedDate":"2022年11月14日","excerpt":"<p>内容：</p>\\n<p>1、手写模拟SpringBoot启动过程</p>\\n<p>2、手写模拟SpringBoot条件注解功能</p>\\n<p>3、手写模拟SpringBoot自动配置功能</p>\\n<p>4、SpringBoot整合Tomcat底层源码分析</p>\\n<p>通过手写模拟实现一个Spring Boot，让大家能以非常简单的方式就能知道Spring Boot大概是如何工作的。</p>\\n<p>完整的代码地址：<a href=\\"https://gitee.com/archguide/zhouyu-springboot\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://gitee.com/archguide/zhouyu-springboot</a></p>","autoDesc":true}');export{t as data};