import Image from "next/image";
import Link from "next/link";
import { cx } from "@utils/all";
import { parseISO, format } from "date-fns";
import locale from "date-fns/locale/pt-BR";
import CategoryLabel from "@components/blog/category";

export default function PostList({ post, aspect }) {
  return (
    <>
      <div className="cursor-pointer group">
        <div
          className={cx(
            "relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105",
            aspect === "landscape" ? "aspect-video" : "aspect-square"
          )}>
          <Link href={`/${post.category}/${post.slug}`}>
            <a>
              <img
                src={`${process.env.NEXT_PUBLIC_OG_SERVER_URL}/api/thumbnail?title=${post.title}&category=${post.category}`}
                alt={post.title || "Thumbnail"}
              />
            </a>
          </Link>
        </div>
        <CategoryLabel category={post.category} />
        <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
          <Link href={`/${post.category}/${post.slug}`}>
            <span
              className="
              bg-gradient-to-r from-green-200 to-green-100 dark:from-blue-800 dark:to-blue-900
              bg-[length:0px_10px]
              bg-left-bottom
              bg-no-repeat
              transition-[background-size]
              duration-500
              hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              {post.title}
            </span>
          </Link>
        </h2>

        <div className="hidden">
          {post.excerpt && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
              <Link href={`/post/${post.slug.current}`}>
                {post.excerpt}
              </Link>
            </p>
          )}
        </div>

        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-5 h-5">
              {post.author.picture && (
                <img
                  src={`/blog${post.author.picture}`}
                  alt={post?.author?.name}
                  sizes="30px"
                  className="rounded-full"
                />
              )}
            </div>
            <span className="text-sm">{post.author.name}</span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time className="text-sm" dateTime={post?.date}>
            {format(parseISO(post?.date), "dd MMMM, yyyy", {
              locale
            })}
          </time>
        </div>
      </div>
    </>
  );
}
