import os
from datetime import datetime
import markdown
import frontmatter
from bs4 import BeautifulSoup

MD_POSTS_DIR = 'posts'
OUTPUT_DIR = '../blog'
HTML_POSTS_DIR_NAME = 'posts'
HTML_POSTS_DIR = os.path.join(OUTPUT_DIR, HTML_POSTS_DIR_NAME)
TEMPLATES_DIR = 'templates'

def load_template(filename):
    with open(os.path.join(TEMPLATES_DIR, filename), 'r', encoding='utf-8') as f:
        return f.read()

def process_post(filename, post_template):
    file_path = os.path.join(MD_POSTS_DIR, filename)
    post = frontmatter.load(file_path)

    if post.get('draft', False):
        print(f"Skipped draft: {filename}")
        return None

    date = post.get('date')
    title = post.get('title')
    tags = post.get('tags', [])
    summary = post.get('summary', '')

    html_content = markdown.markdown(post.content, extensions=['fenced_code', 'tables'])
    out_filename = f"{filename[:-3]}.html"

    out_filepath = os.path.join(HTML_POSTS_DIR, out_filename)

    date_str = date.strftime('%Y-%m-%d') if isinstance(date, datetime) else str(date)

    final_html = post_template.format(
        title=title,
        date_str=date_str,
        content=html_content
    )

    final_html = final_html.replace('href="style.css"', 'href="../../css/style.css"')
    pretty_html = prettify_html(final_html)

    with open(out_filepath, 'w', encoding='utf-8') as f:
        f.write(pretty_html)

    print(f"Processed post: {filename} -> {out_filepath}")

    return {
        'title': title,
        'date': date,
        'url': f"{HTML_POSTS_DIR_NAME}/{out_filename}",
        'summary': summary,
        'tags': tags
    }

def prettify_html(html_string):
    soup = BeautifulSoup(html_string, 'html.parser')
    return soup.prettify(formatter="html")

def generate_blog_index(posts_list, blog_template, preview_template):
    posts_html = ""
    for p in posts_list:
        date_str = p['date'].strftime('%Y-%m-%d') if isinstance(p['date'], datetime) else str(p['date'])
        posts_html += preview_template.format(
            url=p['url'],
            title=p['title'],
            date_str=date_str,
            summary=p['summary']
        )

    page_html = blog_template.format(
        posts_html=posts_html,
    )

    page_html = page_html.replace('href="style.css"', 'href="../css/style.css"')
    pretty_html = prettify_html(page_html)

    out_path = os.path.join(OUTPUT_DIR, 'index.html')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(pretty_html)

    print(f"Done! Generated single blog index with {len(posts_list)} posts.")


def build_blog():
    if not os.path.exists(MD_POSTS_DIR):
        print(f"Directory {MD_POSTS_DIR} not found.")
        return

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    os.makedirs(HTML_POSTS_DIR, exist_ok=True)

    post_template = load_template('post.html')
    blog_template = load_template('blog.html')
    preview_template = load_template('post-preview.html')

    posts_list = []

    for filename in os.listdir(MD_POSTS_DIR):
        if filename.endswith('.md'):
            post_data = process_post(filename, post_template)
            if post_data:
                posts_list.append(post_data)

    posts_list.sort(key=lambda x: x['date'], reverse=True)
    generate_blog_index(posts_list, blog_template, preview_template)


if __name__ == '__main__':
    build_blog()