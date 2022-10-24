import Link from "next/link";
import Label from "@components/ui/label";
import slugify from "slugify";

export default function CategoryLabel({ category }) {
  return (
    <div>
      {category && (
        <Link
          href={`/categoria/${slugify(category, { lower: true })}`}>
          <a>
            <Label color={category}>{category}</Label>
          </a>
        </Link>
      )}
    </div>
  );
}
