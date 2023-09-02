/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

function OffersForm() {
  const apiKey = process.env.NEXT_PUBLIC_MONDAY_API_KEY as string;
  const apiUrl = process.env.NEXT_PUBLIC_MONDAY_API_URL as string;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    text: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

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
        boardId: 1260935178,
        itemName: 'New item name',
        columnValues: JSON.stringify({
          texte4: formData.email,
          texte0: formData.text,
        }),
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

  fetch('https://api.monday.com/v2', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI3ODk4OTExMSwiYWFpIjoxMSwidWlkIjo0ODA1NTc2NiwiaWFkIjoiMjAyMy0wOS0wMVQxMzozNzo1My4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTg1MzI0NjAsInJnbiI6ImV1YzEifQ.MvZWF1Z3_vdY0r4QlQ2GkKpIgcjEzLcY7Mk2chvNsvo',
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(JSON.stringify(res, null, 2)));
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Prénom:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Nom:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Texte:</label>
        <textarea
          name="text"
          value={formData.text}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Créer</button>
    </form>
  );
}

export default OffersForm;
