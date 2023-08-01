const e=JSON.parse('{"key":"v-4f10fbf0","path":"/pages/064b4c/","title":"微服务调用组件Feign&Dubbo实战","lang":"zh-CN","frontmatter":{"title":"微服务调用组件Feign&Dubbo实战","date":"2023-04-11T16:06:26.000Z","permalink":"/pages/064b4c/","author":{"name":"江"},"category":["微服务","Spring Cloud Alibaba"],"description":"RPC概述 思考： 微服务之间如何方便优雅的实现服务间的远程调用？ RPC 全称是 Remote Procedure Call ，即远程过程调用，其对应的是我们的本地调用。RPC 的目的是：让我们调用远程方法像调用本地方法一样。 //本地调用 R result = orderService.findOrderByUserId(id); //RPC远程调用 orderService为代理对象 R result = orderService.findOrderByUserId(id);","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/064b4c/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"微服务调用组件Feign&Dubbo实战"}],["meta",{"property":"og:description","content":"RPC概述 思考： 微服务之间如何方便优雅的实现服务间的远程调用？ RPC 全称是 Remote Procedure Call ，即远程过程调用，其对应的是我们的本地调用。RPC 的目的是：让我们调用远程方法像调用本地方法一样。 //本地调用 R result = orderService.findOrderByUserId(id); //RPC远程调用 orderService为代理对象 R result = orderService.findOrderByUserId(id);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-24T11:27:53.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2023-04-11T16:06:26.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-24T11:27:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"微服务调用组件Feign&Dubbo实战\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-11T16:06:26.000Z\\",\\"dateModified\\":\\"2023-05-24T11:27:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"RPC概述","slug":"rpc概述","link":"#rpc概述","children":[]},{"level":2,"title":"什么是Feign","slug":"什么是feign","link":"#什么是feign","children":[{"level":3,"title":"Ribbon&Feign对比","slug":"ribbon-feign对比","link":"#ribbon-feign对比","children":[]},{"level":3,"title":"Feign的设计架构","slug":"feign的设计架构","link":"#feign的设计架构","children":[]},{"level":3,"title":"Spring Cloud Alibaba快速整合Feign","slug":"spring-cloud-alibaba快速整合feign","link":"#spring-cloud-alibaba快速整合feign","children":[]},{"level":3,"title":"Spring Cloud Feign扩展","slug":"spring-cloud-feign扩展","link":"#spring-cloud-feign扩展","children":[]}]},{"level":2,"title":"Spring Cloud整合Dubbo","slug":"spring-cloud整合dubbo","link":"#spring-cloud整合dubbo","children":[{"level":3,"title":"provider端配置","slug":"provider端配置","link":"#provider端配置","children":[]},{"level":3,"title":"consumer端配置","slug":"consumer端配置","link":"#consumer端配置","children":[]},{"level":3,"title":"从Open Feign迁移到Dubbo","slug":"从open-feign迁移到dubbo","link":"#从open-feign迁移到dubbo","children":[]}]}],"git":{"createdTime":1684927673000,"updatedTime":1684927673000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":10.56,"words":3168},"filePathRelative":"微服务/10.Spring Cloud Alibaba/20.微服务调用组件Feign&Dubbo实战.md","localizedDate":"2023年4月12日","excerpt":"<h2> RPC概述</h2>\\n<p>思考： 微服务之间如何方便优雅的实现服务间的远程调用？</p>\\n<p>RPC 全称是 Remote Procedure Call ，即远程过程调用，其对应的是我们的本地调用。RPC 的目的是：让我们调用远程方法像调用本地方法一样。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">//本地调用</span>\\n<span class=\\"token class-name\\">R</span> result <span class=\\"token operator\\">=</span> orderService<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">findOrderByUserId</span><span class=\\"token punctuation\\">(</span>id<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">//RPC远程调用  orderService为代理对象</span>\\n<span class=\\"token class-name\\">R</span> result <span class=\\"token operator\\">=</span> orderService<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">findOrderByUserId</span><span class=\\"token punctuation\\">(</span>id<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>           \\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};