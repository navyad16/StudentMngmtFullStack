import React from 'react';
import './Pagination.css';

export default function Pagination({ pageInfo, onPageChange }) {
  const getPageNum = (url) => {
    if (!url) return null;
    return new URLSearchParams(url.split('?')[1]).get('page');
  };

  return (
    <div className="pagination-container">
      <button
        disabled={!pageInfo.prev}
        onClick={() => onPageChange(getPageNum(pageInfo.prev))}
      >
        Previous
      </button>
      <button
        disabled={!pageInfo.next}
        onClick={() => onPageChange(getPageNum(pageInfo.next))}
      >
        Next
      </button>
    </div>
  );
}
