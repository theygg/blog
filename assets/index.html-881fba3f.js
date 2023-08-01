const e=JSON.parse('{"key":"v-028a9fe7","path":"/pages/f720d9/","title":"RocketMQ快速实战以及集群架构解析","lang":"zh-CN","frontmatter":{"title":"RocketMQ快速实战以及集群架构解析","date":"2022-11-13T13:46:11.000Z","permalink":"/pages/f720d9/","author":{"name":"江"},"category":["消息队列","RocketMQ"],"description":"RocketMQ介绍 ​\\tRocketMQ是阿里巴巴开源的一个消息中间件，在阿里内部历经了双十一等很多高并发场景的考验，能够处理亿万级别的消息。2016年开源后捐赠给Apache，现在是Apache的一个顶级项目。 ​\\t目前RocketMQ在阿里云上有一个购买即可用的商业版本，商业版本集成了阿里内部一些更深层次的功能及运维定制。我们这里学习的是Apache的开源版本。开源版本相对于阿里云上的商业版本，功能上略有缺失，但是大体上功能是一样的。 RocketMQ的发展历程 ​\\t早期阿里使用ActiveMQ，但是，当消息开始逐渐增多后，ActiveMQ的IO性能很快达到了瓶颈。于是，阿里开始关注Kafka。但是Kafka是针对日志收集场景设计的，他的并发性能并不是很理想。尤其当他的Topic过多时，由于Partition文件也会过多，会严重影响IO性能。于是阿里才决定自研中间件，最早叫做MetaQ，后来改名成为RocketMQ。最早他所希望解决的最大问题就是多Topic下的IO性能压力。但是产品在阿里内部的不断改进，RocketMQ开始体现出一些不一样的优势。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/f720d9/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"RocketMQ快速实战以及集群架构解析"}],["meta",{"property":"og:description","content":"RocketMQ介绍 ​\\tRocketMQ是阿里巴巴开源的一个消息中间件，在阿里内部历经了双十一等很多高并发场景的考验，能够处理亿万级别的消息。2016年开源后捐赠给Apache，现在是Apache的一个顶级项目。 ​\\t目前RocketMQ在阿里云上有一个购买即可用的商业版本，商业版本集成了阿里内部一些更深层次的功能及运维定制。我们这里学习的是Apache的开源版本。开源版本相对于阿里云上的商业版本，功能上略有缺失，但是大体上功能是一样的。 RocketMQ的发展历程 ​\\t早期阿里使用ActiveMQ，但是，当消息开始逐渐增多后，ActiveMQ的IO性能很快达到了瓶颈。于是，阿里开始关注Kafka。但是Kafka是针对日志收集场景设计的，他的并发性能并不是很理想。尤其当他的Topic过多时，由于Partition文件也会过多，会严重影响IO性能。于是阿里才决定自研中间件，最早叫做MetaQ，后来改名成为RocketMQ。最早他所希望解决的最大问题就是多Topic下的IO性能压力。但是产品在阿里内部的不断改进，RocketMQ开始体现出一些不一样的优势。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T18:24:48.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2022-11-13T13:46:11.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T18:24:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RocketMQ快速实战以及集群架构解析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-13T13:46:11.000Z\\",\\"dateModified\\":\\"2023-08-01T18:24:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"RocketMQ介绍","slug":"rocketmq介绍","link":"#rocketmq介绍","children":[{"level":3,"title":"RocketMQ的发展历程","slug":"rocketmq的发展历程","link":"#rocketmq的发展历程","children":[]},{"level":3,"title":"RocketMQ产品特点比较","slug":"rocketmq产品特点比较","link":"#rocketmq产品特点比较","children":[]}]},{"level":2,"title":"RocketMQ快速实战","slug":"rocketmq快速实战","link":"#rocketmq快速实战","children":[{"level":3,"title":"下载RocketMQ","slug":"下载rocketmq","link":"#下载rocketmq","children":[]},{"level":3,"title":"快速安装RocketMQ","slug":"快速安装rocketmq","link":"#快速安装rocketmq","children":[]},{"level":3,"title":"快速运行RocketMQ","slug":"快速运行rocketmq","link":"#快速运行rocketmq","children":[]}]},{"level":2,"title":"RocketMQ集群架构","slug":"rocketmq集群架构","link":"#rocketmq集群架构","children":[{"level":3,"title":"RocketMQ集群架构解析","slug":"rocketmq集群架构解析","link":"#rocketmq集群架构解析","children":[]},{"level":3,"title":"RocketMQ集群搭建与优化","slug":"rocketmq集群搭建与优化","link":"#rocketmq集群搭建与优化","children":[]}]},{"level":2,"title":"RocketMQ消息转发模型","slug":"rocketmq消息转发模型","link":"#rocketmq消息转发模型","children":[{"level":3,"title":"消息模型（Message Model）","slug":"消息模型-message-model","link":"#消息模型-message-model","children":[]},{"level":3,"title":"消息生产者（Producer）","slug":"消息生产者-producer","link":"#消息生产者-producer","children":[]},{"level":3,"title":"消息消费者（Consumer）","slug":"消息消费者-consumer","link":"#消息消费者-consumer","children":[]},{"level":3,"title":"主题（Topic）","slug":"主题-topic","link":"#主题-topic","children":[]},{"level":3,"title":"代理服务器（Broker Server）","slug":"代理服务器-broker-server","link":"#代理服务器-broker-server","children":[]},{"level":3,"title":"名字服务（Name Server）","slug":"名字服务-name-server","link":"#名字服务-name-server","children":[]},{"level":3,"title":"消息（Message）","slug":"消息-message","link":"#消息-message","children":[]}]}],"git":{"createdTime":1690914288000,"updatedTime":1690914288000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":31.32,"words":9397},"filePathRelative":"30.分布式框架/05.消息队列/02.RocketMQ/01.RocketMQ快速实战以及集群架构解析.md","localizedDate":"2022年11月13日","excerpt":"<h2> RocketMQ介绍</h2>\\n<p>​\\tRocketMQ是阿里巴巴开源的一个消息中间件，在阿里内部历经了双十一等很多高并发场景的考验，能够处理亿万级别的消息。2016年开源后捐赠给Apache，现在是Apache的一个顶级项目。</p>\\n<p>​\\t目前RocketMQ在阿里云上有一个购买即可用的商业版本，商业版本集成了阿里内部一些更深层次的功能及运维定制。我们这里学习的是Apache的开源版本。开源版本相对于阿里云上的商业版本，功能上略有缺失，但是大体上功能是一样的。</p>\\n<h3> RocketMQ的发展历程</h3>\\n<p>​\\t早期阿里使用ActiveMQ，但是，当消息开始逐渐增多后，ActiveMQ的IO性能很快达到了瓶颈。于是，阿里开始关注Kafka。但是Kafka是针对日志收集场景设计的，他的并发性能并不是很理想。尤其当他的Topic过多时，由于Partition文件也会过多，会严重影响IO性能。于是阿里才决定自研中间件，最早叫做MetaQ，后来改名成为RocketMQ。最早他所希望解决的最大问题就是多Topic下的IO性能压力。但是产品在阿里内部的不断改进，RocketMQ开始体现出一些不一样的优势。</p>","autoDesc":true}');export{e as data};