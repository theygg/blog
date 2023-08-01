const e=JSON.parse('{"key":"v-d431d27e","path":"/pages/7b5ba3/","title":"Redis缓存高可用集群","lang":"zh-CN","frontmatter":{"title":"Redis缓存高可用集群","date":"2022-10-16T03:01:08.000Z","permalink":"/pages/7b5ba3/","author":{"name":"江"},"category":["Redis"],"description":"1、Redis集群方案比较 哨兵模式 ​ 在redis3.0以前的版本要实现集群一般是借助哨兵sentinel工具来监控master节点的状态，如果master节点异常，则会做主从切换，将某一台slave作为master，哨兵的配置略微复杂，并且性能和高可用性等各方面表现一般，特别是在主从切换的瞬间存在访问瞬断的情况，而且哨兵模式只有一个主节点对外提供服务，没法支持很高的并发，且单个主节点内存也不宜设置得过大，否则会导致持久化文件过大，影响数据恢复或主从同步的效率","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/7b5ba3/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"Redis缓存高可用集群"}],["meta",{"property":"og:description","content":"1、Redis集群方案比较 哨兵模式 ​ 在redis3.0以前的版本要实现集群一般是借助哨兵sentinel工具来监控master节点的状态，如果master节点异常，则会做主从切换，将某一台slave作为master，哨兵的配置略微复杂，并且性能和高可用性等各方面表现一般，特别是在主从切换的瞬间存在访问瞬断的情况，而且哨兵模式只有一个主节点对外提供服务，没法支持很高的并发，且单个主节点内存也不宜设置得过大，否则会导致持久化文件过大，影响数据恢复或主从同步的效率"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T18:24:48.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2022-10-16T03:01:08.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T18:24:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis缓存高可用集群\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-16T03:01:08.000Z\\",\\"dateModified\\":\\"2023-08-01T18:24:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[],"git":{"createdTime":1690914288000,"updatedTime":1690914288000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":13.34,"words":4003},"filePathRelative":"30.分布式框架/00.Redis/20.Redis缓存高可用集群.md","localizedDate":"2022年10月16日","excerpt":"<p><strong>1、Redis集群方案比较</strong></p>\\n<ul>\\n<li><strong>哨兵模式</strong></li>\\n</ul>\\n<p>​    <img src=\\"https://img.jssjqd.cn/20221016030605.png\\" alt=\\"\\" loading=\\"lazy\\"></p>\\n<p>在redis3.0以前的版本要实现集群一般是借助哨兵sentinel工具来监控master节点的状态，如果master节点异常，则会做主从切换，将某一台slave作为master，哨兵的配置略微复杂，并且性能和高可用性等各方面表现一般，特别是在主从切换的瞬间存在访问瞬断的情况，而且哨兵模式只有一个主节点对外提供服务，没法支持很高的并发，且单个主节点内存也不宜设置得过大，否则会导致持久化文件过大，影响数据恢复或主从同步的效率</p>","autoDesc":true}');export{e as data};