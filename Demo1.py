from bs4 import BeautifulSoup
import os


# 定义生成Vue组件的模板
def generate_vue_component(svg_content, icon_name):
    vue_template = """
<template>
 {svg_content}
</template>
<script>
import { shallowRef, ref, computed } from 'vue'
import { useStore } from '@/stores/store'
import { useEditingStore, useTemplatesStore } from '@/stores'
import * as iconComponents from '@/components/svg-icon-a'
import jsonData from '@/stores/data.json'

export default {
    name: '{icon_name}',
    data() {
        return {
            editing: {},
            socialIconsMap: {}
        }
    },
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        // saveTemplate() {
        //     this.store.saveTemplate('Template1', this.data);
        // },
        initEditingStore() {
            // 先从props 中获取数据，
            let data = this.data
            console.log(this.$options.name + "data", data)

            // 如果props 中没有数据，看看用户有没有保存过自定义数据
            if (!data) {
                data = this.store.loadTemplateByName(this.$options.name);
            }

            // 使用默认数据
            if (!data) {
                data = this.templates.getTemplate(this.$options.name)
            }
            this.editing.init(data);
        },
        loadSocialIcons() {
            Object.values(iconComponents).map(component => (
                this.socialIconsMap[component.name] = shallowRef(component)
            ))
        },
        init() {
            this.initEditingStore(this.$options.name);
            this.loadSocialIcons();
        }
    },
    computed: {
        textStyle() {
            let fontName = this.editing?.design?.font || "Arial"
            return {
                color: this.editing.design?.TextColor,
                fontFamily: jsonData.fontList[fontName],
                fontSize: this.editing.design?.fontSize + 'px'
            }
        }
    },
    mounted() {
        this.store = useStore();
        this.editing = useEditingStore()
        this.templates = useTemplatesStore()

        this.init()
    }
}
</script>
<style scoped></style>
    """
    vue_template = vue_template.replace("{svg_content}", svg_content)
    vue_template = vue_template.replace("{icon_name}", icon_name)
    return vue_template

# 从HTML文件中提取SVG并生成Vue组件
def extract_svgs_and_generate_components(html_file_path, output_dir):
    # 读取HTML文件内容
    with open(html_file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()

    # 使用BeautifulSoup解析HTML
    soup = BeautifulSoup(html_content, 'html.parser')

    # 查找所有包含SVG的<a>标签
    svg_tags = soup.select('div.masonry-item')
    
    # 遍历每个包含SVG的<a>标签并生成Vue组件
    for index, a_tag in enumerate(svg_tags):
        # 获取包含SVG的内容
        content = a_tag.select_one('div.template > div')
        if not content:
            continue
        

        # 生成Vue组件内容
        svg_content = str(content)
        vue_component = generate_vue_component(svg_content, f"Template{index+1}")

        # 定义Vue组件文件路径，使用name属性值
        vue_file_path = os.path.join(output_dir, f"Template{index+1}.vue")

        # 保存Vue组件到文件
        with open(vue_file_path, 'w', encoding='utf-8') as vue_file:
            vue_file.write(vue_component)
        
        print(f"生成 Vue 组件: {vue_file_path}")
        

# 主要执行函数
if __name__ == "__main__":
    # 输入HTML文件路径
    input_html = 'Demo2.html'
    # 输出目录，保存生成的Vue组件
    output_directory = './output_vuexs'

    # 创建输出目录（如果不存在）
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    # 提取SVG并生成Vue组件
    extract_svgs_and_generate_components(input_html, output_directory)
