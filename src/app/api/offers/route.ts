/* eslint-disable import/prefer-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  text: string;
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
  // if (req.method === 'POST') {
  //   const { firstName, lastName, email, text } = req.body as FormData;

  //   // Remplacez 'YOUR_API_KEY' par votre clé d'API Monday.com
  //   const apiKey = 'YOUR_API_KEY';
  //   const apiUrl = 'https://api.monday.com/v2';

  //   try {
  //     const response = await axios.post(
  //       `${apiUrl}/items`,
  //       {
  //         board_id: 'YOUR_BOARD_ID', // Remplacez par l'ID de votre tableau Monday.com
  //         item_name: `${firstName} ${lastName}`,
  //         column_values: {
  //           email,
  //           text,
  //         },
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${apiKey}`,
  //         },
  //       }
  //     );

  //     res.status(200).json({ success: true, data: response.data });
  //   } catch (error: any) {
  //     console.error(
  //       "Erreur lors de la création de l'élément dans Monday.com",
  //       error
  //     );
  //     res.status(500).json({ success: false, error: error.message });
  //   }
  // } else {
  //   res.status(405).end();
  // }
}
