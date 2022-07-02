import { useState } from "react";

export const usePagination = (items, pageSize) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState(items.slice(0, pageSize));

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setCurrentItems(items.slice((page - 1) * pageSize, page * pageSize));
    }

    return {
        currentPage,
        currentItems,
        handlePageChange,
    }
}