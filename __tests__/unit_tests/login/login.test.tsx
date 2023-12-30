import useLoginModal  from '../../../app/hooks/useLoginModal';
// write unit test for this blocks 
describe('useLoginModal', () => {
    it('should return isOpen as false', () => {
        const { isOpen } = useLoginModal.getState();
        expect(isOpen).toBe(false);
    });
   
    it('should return isOpen as false', () => {
        const { isOpen } = useLoginModal.getState();
        expect(isOpen).toBe(false);
    });

    it('should return isOpen as false by default', () => {
        const { isOpen } = useLoginModal.getState();
        expect(isOpen).toBe(false);
      });
    
     
});
