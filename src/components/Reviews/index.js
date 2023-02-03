import React, { useEffect, useState } from "react";
import s from "./Reviews.module.scss";
import { Rate, Progress } from "antd";
import { HiStar } from "react-icons/hi";
import { TfiAngleDown } from "react-icons/tfi";
import CardComment from "components/CardComment";
import { useParams } from "react-router-dom";
import { getReviews } from "services/jobDetail";
const Reviews = () => {
  const [comments, setComments] = useState([]);
  const params = useParams();
  useEffect(() => {
    getComments();
  }, [params.id]);
  const getComments = async () => {
    let res = await getReviews(params.id);
    setComments(res?.content);
  };
  return (
    <div className={s.reviews}>
      <div className={s.content}>
        <div className={s.review}>
          <h1>Reviews</h1>
          <div className={s.rate}>
            <h3>181 reviews for this Gig</h3>
            <div className={s.rateStar}>
              <Rate
                disabled
                style={{ fontSize: 15, fill: "#ffb33e" }}
                allowHalf
                defaultValue={5}
              />
              <span>5</span>
            </div>
          </div>
          <div className={s.row}>
            <div className={s.left}>
              <div className={s.col}>
                <p className={s.fiveStar}>5 Stars</p>
                <Progress
                  percent={(179 / 181) * 100}
                  strokeColor={"#ffb33e"}
                  format={() => "(179)"}
                />
              </div>
              <div className={s.col}>
                <p  className={s.fiveStar}>4 Stars</p>
                <Progress
                  percent={(2 / 181) * 100}
                  strokeColor={"#ffb33e"}
                  format={() => "(2)"}
                />
              </div>
              <div className={s.col}>
                <p>3 Stars</p>
                <Progress percent={0} format={() => "(0)"} />
              </div>
              <div className={s.col}>
                <p>2 Stars</p>
                <Progress percent={0} format={() => "(0)"} />
              </div>
              <div className={s.col}>
                <p>1 Star</p>
                <Progress percent={0} format={() => "(0)"} />
              </div>
            </div>
            <div className={s.right}>
              <h4>Rating Breakdown</h4>
              <div className={s.item}>
                <h6>Seller communication level</h6>
                <div>
                  <HiStar />
                  <p>5</p>
                </div>
              </div>
              <div className={s.item}>
                <h6>Recommend to a friend</h6>
                <div>
                  <HiStar />
                  <p>5</p>
                </div>
              </div>
              <div className={s.item}>
                <h6>Service as described</h6>
                <div>
                  <HiStar />
                  <p>5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.comments}>
          <h3>Filters</h3>
          <div className={s.industry}>
            Industry{" "}
            <span>
              All Industries <TfiAngleDown />
            </span>
          </div>
          <div className={s.comment}>
            <div>
              {comments?.map((item, index) => (
                <CardComment {...item} />
              ))}
            </div>
          </div>
          <div className={s.seeMore}>
            <button>+ See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
