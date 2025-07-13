import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bankruptcy vs Bankrupcy - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bankruptcy&quot; and &quot;bankrupcy&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'bankruptcy, bankrupcy, spelling, correct spelling, word comparison, English spelling',
  openGraph: {
    title: 'Bankruptcy vs Bankrupcy - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bankruptcy&quot; and &quot;bankrupcy&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BankruptcyVsBankrupcyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bankruptcy vs Bankrupcy</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of this legal term is crucial for professional and academic writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Bankrupcy
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. The word &quot;bankrupcy&quot; does not exist in English.
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• The company filed for bankrupcy</li>
              <li>• Bankrupcy laws protect debtors</li>
              <li>• The bankrupcy process is complex</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Bankruptcy
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Bankruptcy&quot; is the proper legal term.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• The company filed for bankruptcy</li>
              <li>• Bankruptcy laws protect debtors</li>
              <li>• The bankruptcy process is complex</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Bankruptcy</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Bankruptcy</strong> (noun): A legal status of a person or organization that cannot repay the debts it owes to creditors.
          </p>
          <p>
            In most jurisdictions, bankruptcy is imposed by a court order, often initiated by the debtor. It provides relief to debtors and ensures fair distribution of assets among creditors.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Bankruptcy</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Insolvency</li>
              <li>• Financial failure</li>
              <li>• Liquidation</li>
              <li>• Receivership</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Default</li>
              <li>• Financial ruin</li>
              <li>• Chapter 11 (US)</li>
              <li>• Administration (UK)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Bankruptcy&quot; is always spelled with a &quot;t&quot; before the &quot;c&quot;</li>
          <li>• The word comes from Italian &quot;banca rotta&quot; meaning &quot;broken bench&quot;</li>
          <li>• In legal contexts, always use the correct spelling &quot;bankruptcy&quot;</li>
          <li>• The pronunciation is /ˈbæŋkrəptsi/ (BANK-ruhp-see)</li>
          <li>• Different countries have different bankruptcy laws and procedures</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people misspell &quot;bankruptcy&quot; as &quot;bankrupcy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
                              A: This is likely due to phonetic confusion. The &quot;t&quot; sound in &quot;bankruptcy&quot; can be subtle in speech, leading some to omit it in writing.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;bankrupcy&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
                              A: No, &quot;bankrupcy&quot; is never correct. Always use &quot;bankruptcy&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What are the different types of bankruptcy?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: In the US, common types include Chapter 7 (liquidation), Chapter 11 (reorganization), and Chapter 13 (debt adjustment). Other countries have their own systems.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Bankruptcy</strong> is the correct spelling of this legal term. The incorrect spelling &quot;bankrupcy&quot; should never be used.
          </p>
          <p>
            Remember: Bankruptcy = Bank + rupt + cy (with a &quot;t&quot; before the &quot;c&quot;). This spelling is consistent across all English-speaking countries and legal systems.
          </p>
        </div>
      </div>
    </div>
  )
} 