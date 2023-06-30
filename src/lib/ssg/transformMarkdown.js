import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse/lib';
import remarkRehype from 'remark-rehype/lib';
import addClasses from 'rehype-add-classes';
import toc from '@jsdevtools/rehype-toc';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse/lib';
import remarkGfm from 'remark-gfm';

export async function transformMarkdown(markdown) {

    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(remarkGfm)
        // .use(addClasses, {
        //     h1,
        //     h2,
        //     h3
        // })
        .use(rehypeHighlight)
        .use(toc)
        .use(rehypeSlug)
        .use(rehypeStringify)

        .process(markdown)

    const contentHTML = processedContent.toString()

    return {
        contentHTML
    }
}

