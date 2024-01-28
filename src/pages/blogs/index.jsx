import { useState, useEffect } from "react";
import BlogCard from "../../style-guide/components/BlogCard";
import ArticlesData from "../../../blogs.json";
import styles from "../../styles/Blogs.module.scss";
import Spinner from "../../style-guide/components/Spinner";
import { toast } from "react-toastify";

export default function Blogs() {
  const [articledata, setArticledata] = useState(ArticlesData);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/article`)
        .then((req) => req.json())
        .then((res) => {
          setArticledata(res.articles);
          setLoading(false);
          console.log({ res });
        });
    } catch (err) {
      console.error("Error: ", err);
      toast.error("Network Error");
    }
  }, []);
  if (!articledata || !articledata.length || loading) {
    return <Spinner />;
  } else
    return (
      <div className={styles.BlogsPage}>
        {articledata.map((item) => (
          <BlogCard key={item._id} data={item} />
        ))}
      </div>
    );
}
