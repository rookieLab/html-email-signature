
import os

def load_vue_file(path):
    try:
        with open(path, 'r', encoding='utf-8') as file:
            vue_content = file.read()
        return vue_content
    except FileNotFoundError:
        print(f"Error: File not found at path {path}")
        return None
    except Exception as e:
        print(f"Error loading file: {str(e)}")
        return None


def convert_to_soup(vue_string):
    import re
    from bs4 import BeautifulSoup
    
    # Extract template content using regex
    template_match = re.search(r'<template>(.*?)</template>', vue_string, re.DOTALL)
    if not template_match:
        return None
        
    template_content = template_match.group(1)
    
    # Parse template content into BeautifulSoup object
    soup = BeautifulSoup(template_content, 'html.parser')
    return soup


def downlaod_img(_src):
    try:
        print(_src)
            # Download image
        import requests
        import os
        
        # Extract filename from URL
        filename = os.path.basename(_src)
        addons
        

        # Create images directory if it doesn't exist
        if not os.path.exists('images'):
            os.makedirs('images')
        if not os.path.exists('images/addons'):
            os.makedirs('images')
            
        # Download and save image
        img_data = requests.get(_src).content
        filename = filename.split('?')[0]
        if "addons" in _src:
            with open(f'images/addons/{filename}', 'wb') as f:
                f.write(img_data)
        else:
            with open(f'images/{filename}', 'wb') as f:
                f.write(img_data)
    except Exception as e:
        print(f"Error downloading image {_src}: {str(e)}")



def replace_vue_file_img_path(old_vue_content):
    soup = convert_to_soup(old_vue_content)
    if not soup:
        return old_vue_content
        
    # Find all img tags and get their src attributes
    img_tags = soup.find_all('img')
    for img in img_tags:
        src = img.get('src')
        if src and src.startswith('http'):
            downlaod_img(src)
    



if __name__ == "__main__":
    # 输出目录，保存生成的Vue组件
    output_directory = './output_vuexs'
    # 创建输出目录（如果不存在）
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    
    for i in range(1,2):
        vue_path = f"src/components/templates/Template{i}.vue"
        vue_content = load_vue_file(vue_path)
        replace_vue_file_img_path(vue_content)
        