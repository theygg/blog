const t=JSON.parse('{"key":"v-0d864864","path":"/pages/f0b148/","title":"后台核心功能及多数据源架构","lang":"zh-CN","frontmatter":{"title":"后台核心功能及多数据源架构","date":"2023-05-04T07:36:32.000Z","permalink":"/pages/f0b148/","author":{"name":"江"},"category":["微服务电商平台"],"description":"电商管理后台跟其他管理系统一样，本质上是一个纯粹的CRUD管理系统，没有什么技术难度。这一类系统通常都不是项目的核心模块，但是却是串联核心业务必不可少的辅助模块。对于后台管理系统，我们今天还是关注他的技术路线，至于业务功能，大家可以随着以后各个业务线的具体设计过程再继续深入。 重点关注两个问题： 通过后台项目快速理解电商数据全貌。先整体梳理一下电商项目的后台表结构，快速梳理电商管理系统的后台数据管理功能。 如何给普通的CRUD管理系统赋能。电商后台功能虽然复杂，但是其实后端技术层面的难度并不大，相信大家就算自己实现也没有什么难度。但是在今天课程中，会带大家打开技术想象力，给这个简单的系统增加不一样的设计。带你接触一下什么是互联网思维。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/f0b148/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"后台核心功能及多数据源架构"}],["meta",{"property":"og:description","content":"电商管理后台跟其他管理系统一样，本质上是一个纯粹的CRUD管理系统，没有什么技术难度。这一类系统通常都不是项目的核心模块，但是却是串联核心业务必不可少的辅助模块。对于后台管理系统，我们今天还是关注他的技术路线，至于业务功能，大家可以随着以后各个业务线的具体设计过程再继续深入。 重点关注两个问题： 通过后台项目快速理解电商数据全貌。先整体梳理一下电商项目的后台表结构，快速梳理电商管理系统的后台数据管理功能。 如何给普通的CRUD管理系统赋能。电商后台功能虽然复杂，但是其实后端技术层面的难度并不大，相信大家就算自己实现也没有什么难度。但是在今天课程中，会带大家打开技术想象力，给这个简单的系统增加不一样的设计。带你接触一下什么是互联网思维。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-24T11:27:53.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2023-05-04T07:36:32.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-24T11:27:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"后台核心功能及多数据源架构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-04T07:36:32.000Z\\",\\"dateModified\\":\\"2023-05-24T11:27:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"电商后台项目需要访问的数据源说明","slug":"电商后台项目需要访问的数据源说明","link":"#电商后台项目需要访问的数据源说明","children":[]},{"level":2,"title":"电商后台使用MyBatis-plus快速访问多个数据源","slug":"电商后台使用mybatis-plus快速访问多个数据源","link":"#电商后台使用mybatis-plus快速访问多个数据源","children":[{"level":3,"title":"使用Spring提供的AbstractRoutingDataSource","slug":"使用spring提供的abstractroutingdatasource","link":"#使用spring提供的abstractroutingdatasource","children":[]},{"level":3,"title":"使用MyBatis注册多个SqlSessionFactory","slug":"使用mybatis注册多个sqlsessionfactory","link":"#使用mybatis注册多个sqlsessionfactory","children":[]},{"level":3,"title":"使用dynamic-datasource框架","slug":"使用dynamic-datasource框架","link":"#使用dynamic-datasource框架","children":[]}]}],"git":{"createdTime":1684927673000,"updatedTime":1684927673000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":5.18,"words":1555},"filePathRelative":"微服务电商项目/10.后台核心功能及多数据源架构.md","localizedDate":"2023年5月4日","excerpt":"<p>电商管理后台跟其他管理系统一样，本质上是一个纯粹的CRUD管理系统，没有什么技术难度。这一类系统通常都不是项目的核心模块，但是却是串联核心业务必不可少的辅助模块。对于后台管理系统，我们今天还是关注他的技术路线，至于业务功能，大家可以随着以后各个业务线的具体设计过程再继续深入。</p>\\n<p>重点关注两个问题：</p>\\n<ul>\\n<li>\\n<p>通过后台项目快速理解电商数据全貌。先整体梳理一下电商项目的后台表结构，快速梳理电商管理系统的后台数据管理功能。</p>\\n</li>\\n<li>\\n<p>如何给普通的CRUD管理系统赋能。电商后台功能虽然复杂，但是其实后端技术层面的难度并不大，相信大家就算自己实现也没有什么难度。但是在今天课程中，会带大家打开技术想象力，给这个简单的系统增加不一样的设计。带你接触一下什么是互联网思维。</p>\\n</li>\\n</ul>","autoDesc":true}');export{t as data};