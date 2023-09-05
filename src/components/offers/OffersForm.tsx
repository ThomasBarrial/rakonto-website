/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { IMondayClmnArray } from '../../../types';
import TextInput from '../inputs/TextInput';
import TextAreaInput from '../inputs/TextAreaInput';
import EmailInput from '../inputs/EmailInput';

function OffersForm({ mondayBoard }: { mondayBoard: any }) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const apiKey = process.env.NEXT_PUBLIC_MONDAY_API_KEY as string;
  const apiUrl = process.env.NEXT_PUBLIC_MONDAY_API_URL as string;
  const [userName, setUserName] = useState('');
  const [userFirstName, setUserFirstName] = useState('');

  const [formInputs, setFormInputs] = useState<IMondayClmnArray[]>([]);

  useEffect(() => {
    console.log('hello', mondayBoard);
    // Créez une copie des colonnes de mondayBoard avec la propriété "value"
    const updatedFormInputs = mondayBoard.columns.map(
      (element: IMondayClmnArray) => ({ ...element, value: '' })
    );

    setFormInputs(updatedFormInputs);
  }, []);

  // console.log(mondayBoard.id);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) => {
    const updatedFormInputs = formInputs.map((colmn) => {
      if (colmn.id === id) {
        return { ...colmn, value: e.target.value };
      }
      return colmn;
    });

    setFormInputs(updatedFormInputs);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Supprimez l'élément avec l'id "name" du tableau
    const filteredFormInputs = formInputs.filter(
      (colmn) => colmn.id !== 'name'
    );

    // Utilisez reduce pour créer l'objet souhaité
    const resultObject: Record<string, string> = filteredFormInputs.reduce(
      (acc: any, colmn) => {
        acc[colmn.id] = colmn.value || '';
        return acc;
      },
      {}
    );

    console.log('result', resultObject);

    console.log('submit', formInputs);

    console.log(parseInt(mondayBoard.id, 10));

    const body = {
      query: `
      mutation ($boardId: Int!, $itemName: String!, $columnValues: JSON!) {
        create_item (
          board_id: $boardId,
          item_name: $itemName,
          column_values: $columnValues
        ) {
          id
        }
      }
      `,
      variables: {
        boardId: parseInt(mondayBoard.id, 10),
        itemName: `${userFirstName} ${userName}`,
        columnValues: JSON.stringify(resultObject),
      },
    };

    try {
      axios
        .post(apiUrl, body, {
          headers: {
            Authorization: apiKey,
          },
        })
        .catch((err) => {
          console.error(err.data);
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.error(
        "Erreur lors de la création de l'élément dans Monday.com",
        error
      );
    }
  };

  const query = '{ boards (limit:5) {name id groups{title id} }  }';

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextInput
          value={userFirstName}
          name={selectedLanguage === 'Fr' ? 'Prénoms' : 'Firstname'}
          onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            setUserFirstName(e.target.value)
          }
        />
        <TextInput
          value={userName}
          name={selectedLanguage === 'Fr' ? 'Noms' : 'LastName'}
          onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            setUserName(e.target.value)
          }
        />
        {formInputs.map((colmn) => (
          <div key={colmn.id}>
            {colmn.type === 'text' && colmn.title.toLowerCase() !== 'email' && (
              <TextAreaInput
                value={colmn.value}
                name={colmn.title}
                onChange={(
                  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => handleInputChange(e, colmn.id)}
              />
            )}
            {colmn.type === 'text' && colmn.title.toLowerCase() === 'email' && (
              <EmailInput
                value={colmn.value}
                name={colmn.title}
                onChange={(
                  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => handleInputChange(e, colmn.id)}
              />
            )}
          </div>
        ))}
      </div>
      <button type="submit">Créer</button>
    </form>
  );
}

export default OffersForm;
