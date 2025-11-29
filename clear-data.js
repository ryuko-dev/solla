// Script to clear all Sola application data from localStorage
// Run this in the browser console or as a bookmarklet

(function() {
    console.log('Clearing all Sola application data...');
    
    // Get all localStorage keys
    const keys = Object.keys(localStorage);
    const solaKeys = keys.filter(key => key.startsWith('sola-'));
    
    console.log(`Found ${solaKeys.length} Sola data entries to remove:`);
    solaKeys.forEach(key => console.log(`  - ${key}`));
    
    // Remove all Sola data
    solaKeys.forEach(key => {
        localStorage.removeItem(key);
    });
    
    console.log('✅ All Sola application data has been cleared!');
    console.log('🔄 Please refresh the page to start with a clean dataset.');
    
    // Optional: Show confirmation
    if (confirm('All Sola data has been cleared. Would you like to refresh the page now?')) {
        window.location.reload();
    }
})();
