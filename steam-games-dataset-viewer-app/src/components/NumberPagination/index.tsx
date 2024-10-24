import ReactPaginate from 'react-paginate';
import { Box, Button, Text } from '@chakra-ui/react';

const NumberPagination = ({ pageCount, onPageChange }: { pageCount: number; onPageChange: (selectedItem: { selected: number }) => void }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
      <ReactPaginate
        previousLabel={<Button variant="outline">Previous</Button>}
        nextLabel={<Button variant="outline">Next</Button>}
        breakLabel={<Text mx={2}>...</Text>}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName="pagination"
        activeClassName="active"
      />
    </Box>
  );
};

export default NumberPagination;
