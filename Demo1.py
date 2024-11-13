from bs4 import BeautifulSoup
import os


# 定义生成Vue组件的模板
def generate_vue_component(svg_content, icon_name):
    vue_template = f"""
<template>
 {svg_content}
</template>

<script name=" {icon_name}" setup>


</script>
<style scoped></style>
    """
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
